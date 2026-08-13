import { createClient, createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LoanSection from "@/app/components/admin/LoanSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = { title: "Personal Loan Leads | CashMela Admin" };

export default async function PersonalLoanPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const adminSupabase = await createAdminClient();


  const { data: leads } = await adminSupabase
    .from("leads")
    .select("*")
    .eq("loan_type", "Personal")
    .order("created_at", { ascending: false });

  return <LoanSection loanType="Personal" leads={leads || []} />;
}
