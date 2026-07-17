
CREATE TABLE public.leads (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  form_id TEXT NOT NULL,
  subject TEXT,
  source TEXT,
  payload JSONB NOT NULL DEFAULT '{}'::jsonb,
  user_agent TEXT,
  forwarded BOOLEAN NOT NULL DEFAULT false,
  forward_error TEXT
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit leads"
  ON public.leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
