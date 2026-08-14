import { createClient, createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import LeadsTable from "@/app/components/admin/LeadsTable";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function LeadsPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/admin/login");
  }

  // Use admin client to bypass RLS
  const adminSupabase = await createAdminClient();

  // Fetch admin role check
  

  // Fetch leads
  const { data: leads, error } = await adminSupabase
    .from("leads")
    .select("*")
    .order("updated_at", { ascending: false, nullsFirst: false });

  if (error) {
    console.error("Error fetching leads:", error);
  }

  return (
    <div className="p-8">
      <div className="flex items-center gap-3.5 mb-8">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-200">
          <i className="uil uil-users-alt text-2xl"></i>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">Leads Management</h1>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-0.5">View details, track notes, and change status of loan applications.</p>
        </div>
      </div>

      <Suspense fallback={
        <div className="flex flex-col items-center justify-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm text-gray-400 font-bold">
          <svg className="animate-spin h-8 w-8 text-blue-600 mb-3" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Loading leads table...
        </div>
      }>
        <LeadsTable initialLeads={leads || []} />
      </Suspense>
    </div>
  );
}
