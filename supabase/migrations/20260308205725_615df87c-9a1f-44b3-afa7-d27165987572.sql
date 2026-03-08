
CREATE TABLE public.mailing_list (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.mailing_list ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public signup form)
CREATE POLICY "Anyone can subscribe"
  ON public.mailing_list FOR INSERT
  WITH CHECK (true);

-- Block public reads (emails are PII)
CREATE POLICY "No public reads"
  ON public.mailing_list FOR SELECT
  USING (false);
