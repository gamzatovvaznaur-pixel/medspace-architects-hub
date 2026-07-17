import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors';
import { createClient } from 'npm:@supabase/supabase-js@2';
import { z } from 'npm:zod@3.23.8';

// Only these Formspree form IDs are accepted (whitelist).
const ALLOWED_FORM_IDS = new Set([
  'mdapgwjz', // основная почта
  'xykllrgn', // квиз
  'xlgaaqrw', // лендинг
]);

const BodySchema = z.object({
  formId: z.string().min(3).max(32),
  subject: z.string().max(300).optional(),
  source: z.string().max(200).optional(),
  data: z.record(z.any()).default({}),
});

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const json = await req.json().catch(() => null);
    const parsed = BodySchema.safeParse(json);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ error: 'invalid_body', details: parsed.error.flatten().fieldErrors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } },
      );
    }

    const { formId, subject, source, data } = parsed.data;
    if (!ALLOWED_FORM_IDS.has(formId)) {
      return new Response(JSON.stringify({ error: 'unknown_form' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const supabase = createClient(
      Deno.env.get('SUPABASE_URL')!,
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,
    );

    // 1) Save the lead first — this is the source of truth.
    const userAgent = req.headers.get('user-agent') ?? null;
    const { data: inserted, error: dbError } = await supabase
      .from('leads')
      .insert({
        form_id: formId,
        subject: subject ?? null,
        source: source ?? null,
        payload: data,
        user_agent: userAgent,
      })
      .select('id')
      .single();

    if (dbError) {
      console.error('lead insert failed', dbError);
      return new Response(JSON.stringify({ error: 'db_error' }), {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    // 2) Try to forward to Formspree (server->server; not blocked in RU).
    let forwarded = false;
    let forwardError: string | null = null;
    try {
      const resp = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...data, _subject: subject, _source: source }),
      });
      if (resp.ok) {
        forwarded = true;
      } else {
        forwardError = `formspree_${resp.status}`;
      }
    } catch (err) {
      forwardError = err instanceof Error ? err.message : String(err);
    }

    if (inserted?.id) {
      await supabase
        .from('leads')
        .update({ forwarded, forward_error: forwardError })
        .eq('id', inserted.id);
    }

    return new Response(JSON.stringify({ ok: true, id: inserted?.id, forwarded }), {
      status: 200,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('submit-lead unexpected error', err);
    return new Response(JSON.stringify({ error: 'internal_error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
