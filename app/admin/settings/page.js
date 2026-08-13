import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminSettingsForm from "@/app/components/admin/AdminSettingsForm";

export const dynamic = "force-dynamic";
export const metadata = {
  title: "Settings | Admin Dashboard",
};

export default async function SettingsPage() {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user || userError) {
    redirect("/admin/login");
  }

  return (
    <div className="p-8 max-w-4xl">
      <div className="flex items-center gap-3.5 border-b border-gray-100 pb-5 mb-8">
        <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-xl flex items-center justify-center border border-slate-200">
          <i className="uil uil-setting text-2xl"></i>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">System Settings</h1>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-0.5">Manage your admin profile and password.</p>
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Account Settings</h2>
        <AdminSettingsForm user={user} />
      </div>
    </div>
  );
}
