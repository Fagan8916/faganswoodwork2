
CREATE TABLE public.contact_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  enquiry_type TEXT NOT NULL DEFAULT 'commission',
  looking_for TEXT,
  size TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit (public contact form)
CREATE POLICY "Anyone can submit enquiry"
  ON public.contact_enquiries FOR INSERT
  WITH CHECK (true);

-- Block public reads (contains PII)
CREATE POLICY "No public reads"
  ON public.contact_enquiries FOR SELECT
  USING (false);
