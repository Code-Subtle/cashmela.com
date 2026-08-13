-- Migration to add comprehensive application fields to public.leads table

ALTER TABLE public.leads
ADD COLUMN IF NOT EXISTS email_address TEXT,
ADD COLUMN IF NOT EXISTS date_of_birth TEXT,
ADD COLUMN IF NOT EXISTS city TEXT,
ADD COLUMN IF NOT EXISTS company_name TEXT,
ADD COLUMN IF NOT EXISTS current_emi NUMERIC,
ADD COLUMN IF NOT EXISTS loan_purpose TEXT;

-- Refresh schema cache indicator
COMMENT ON TABLE public.leads IS 'Stores detailed multi-step loan leads for Personal, Business, Debt Consolidation, and Overdraft loans.';
