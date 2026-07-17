import { supabase } from "@/integrations/supabase/client";

export type LeadPayload = {
  formId: string;
  subject?: string;
  source?: string;
  data: Record<string, unknown>;
};

/**
 * Отправляет заявку через нашу edge-функцию.
 * Пользователь стучится только на *.supabase.co (не заблокировано в РФ),
 * а сервер уже пересылает данные в Formspree.
 */
export async function submitLead(payload: LeadPayload): Promise<void> {
  const { error } = await supabase.functions.invoke("submit-lead", { body: payload });
  if (error) throw error;
}
