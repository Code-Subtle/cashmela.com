import { createClient, createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import LoanSection from "@/app/components/admin/LoanSection";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const metadata = { title: "Business Loan Leads | CashMela Admin" };

export default async function BusinessLoanPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  const adminSupabase = await createAdminClient();


  const { data: leads } = await adminSupabase
    .from("leads")
    .select("*")
    .eq("loan_type", "Business")
    .order("created_at", { ascending: false });

  return <LoanSection loanType="Business" leads={leads || []} />;
}
