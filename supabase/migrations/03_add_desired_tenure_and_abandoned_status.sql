-- Migration: Add desired_tenure column and update status constraint to include 'abandoned'

ALTER TABLE public.leads
ADD COLUMN IF NOT EXISTS desired_tenure TEXT;

-- Update status constraint to include 'abandoned'
ALTER TABLE public.leads DROP CONSTRAINT IF EXISTS leads_status_check;
ALTER TABLE public.leads ADD CONSTRAINT leads_status_check 
  CHECK (status IN ('pending', 'approved', 'rejected', 'in_progress', 'stuck', 'abandoned'));

COMMENT ON COLUMN public.leads.desired_tenure IS 'Desired loan tenure in years (e.g., 1 Year, 3 Years, 5 Years)';
