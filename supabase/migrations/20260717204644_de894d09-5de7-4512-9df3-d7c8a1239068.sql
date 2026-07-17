
DROP POLICY IF EXISTS "Anyone can submit leads" ON public.leads;
REVOKE INSERT ON public.leads FROM anon, authenticated;
