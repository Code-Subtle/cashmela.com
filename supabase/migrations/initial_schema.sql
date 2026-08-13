-- 1. Create leads table
CREATE TABLE public.leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  loan_type TEXT NOT NULL CHECK (loan_type IN ('Personal', 'Business', 'Overdraft', 'Debt Consolidation')),
  employment_type TEXT,
  monthly_income NUMERIC,
  loan_amount NUMERIC,
  pincode TEXT,
  full_name TEXT,
  mobile_number TEXT,
  email_address TEXT,
  date_of_birth TEXT,
  city TEXT,
  company_name TEXT,
  current_emi NUMERIC,
  loan_purpose TEXT,
  pan_number TEXT,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'in_progress', 'stuck')),
  notes TEXT,
  ip_address TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS Setup
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- Leads Policies
CREATE POLICY "Public can insert leads" 
ON public.leads FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Admins have full access to leads" 
ON public.leads FOR ALL 
USING (auth.uid() IS NOT NULL);
