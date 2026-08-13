import { createClient, createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LoanSection from "@/app/components/admin/LoanSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = { title: "Debt Consolidation Leads | CashMela Admin" };

export default async function ConsolidationLoanPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const adminSupabase = await createAdminClient();


  const { data: leads } = await adminSupabase
    .from("leads")
    .select("*")
    .eq("loan_type", "Debt Consolidation")
    .order("created_at", { ascending: false });

  return <LoanSection loanType="Debt Consolidation" leads={leads || []} />;
}
