import { createClient, createAdminClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminDashboard() {
  const supabase = await createClient();
  const { data: { user }, error: userError } = await supabase.auth.getUser();

  if (!user) {
    console.log("No user found in admin dashboard, userError:", userError);
    redirect("/admin/login");
  }

  // Use admin client to bypass RLS and avoid infinite recursion
  const adminSupabase = await createAdminClient();
  
  

  // Fetch metrics using admin client
  const { count: totalLeads } = await adminSupabase
    .from("leads")
    .select("*", { count: "exact", head: true });

  const { count: pendingLeads } = await adminSupabase
    .from("leads")
    .select("*", { count: "exact", head: true })
    .eq("status", "pending");

  const { count: approvedLeads } = await adminSupabase
    .from("leads")
    .select("*", { count: "exact", head: true })
    .eq("status", "approved");

  const { count: inProgressLeads } = await adminSupabase
    .from("leads")
    .select("*", { count: "exact", head: true })
    .eq("status", "in_progress");

  const { count: rejectedLeads } = await adminSupabase
    .from("leads")
    .select("*", { count: "exact", head: true })
    .eq("status", "rejected");

  const { count: stuckLeads } = await adminSupabase
    .from("leads")
    .select("*", { count: "exact", head: true })
    .eq("status", "stuck");

  const { count: abandonedLeads } = await adminSupabase
    .from("leads")
    .select("*", { count: "exact", head: true })
    .eq("status", "abandoned");

  // Fetch leads by type
  const { data: leadsByType } = await adminSupabase
    .from("leads")
    .select("loan_type");
    
  const typeCounts = (leadsByType || []).reduce((acc, lead) => {
    acc[lead.loan_type] = (acc[lead.loan_type] || 0) + 1;
    return acc;
  }, {});


  // Mathematical circular SVG donut values (Circumference = 100)
  const total = totalLeads || 0;
  const p1 = total > 0 ? ((typeCounts['Personal'] || 0) / total) * 100 : 0;
  const p2 = total > 0 ? ((typeCounts['Business'] || 0) / total) * 100 : 0;
  const p3 = total > 0 ? ((typeCounts['Overdraft'] || 0) / total) * 100 : 0;
  const p4 = total > 0 ? ((typeCounts['Debt Consolidation'] || 0) / total) * 100 : 0;

  const o1 = 0;
  const o2 = p1;
  const o3 = p1 + p2;
  const o4 = p1 + p2 + p3;

  return (
    <div className="p-8 space-y-8">
      
      {/* Page Header */}
      <div className="flex items-center gap-3.5 border-b border-gray-100 pb-5">
        <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center border border-blue-200">
          <i className="uil uil-chart-bar text-2xl"></i>
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">Dashboard Overview</h1>
          <p className="text-xs sm:text-sm text-gray-500 font-semibold mt-0.5">Track lead volumes, conversion statistics, and system registrations.</p>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* Total Leads Card */}
        <Link href="/admin/leads" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between transition-all hover:shadow-md cursor-pointer">
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2">Total Leads</h3>
            <p className="text-4xl font-black text-gray-900">{totalLeads || 0}</p>
          </div>
          <div className="w-14 h-14 bg-blue-50 text-blue-500 rounded-2xl flex items-center justify-center border border-blue-100">
            <i className="uil uil-receipt text-3xl"></i>
          </div>
        </Link>

        {/* Pending Leads Card */}
        <Link href="/admin/leads?status=pending" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between transition-all hover:shadow-md cursor-pointer">
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2">Pending Leads</h3>
            <p className="text-4xl font-black text-amber-500">{pendingLeads || 0}</p>
          </div>
          <div className="w-14 h-14 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center border border-amber-100">
            <i className="uil uil-clock-three text-3xl"></i>
          </div>
        </Link>

        {/* Approved Leads Card */}
        <Link href="/admin/leads?status=approved" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between transition-all hover:shadow-md cursor-pointer">
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2">Approved Leads</h3>
            <p className="text-4xl font-black text-emerald-500">{approvedLeads || 0}</p>
          </div>
          <div className="w-14 h-14 bg-emerald-50 text-emerald-500 rounded-2xl flex items-center justify-center border border-emerald-100">
            <i className="uil uil-check-circle text-3xl"></i>
          </div>
        </Link>

        {/* Abandoned Drafts Card */}
        <Link href="/admin/leads?status=abandoned" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center justify-between transition-all hover:shadow-md cursor-pointer">
          <div>
            <h3 className="text-xs font-extrabold text-gray-400 uppercase tracking-wider mb-2">Abandoned Drafts</h3>
            <p className="text-4xl font-black text-purple-600">{abandonedLeads || 0}</p>
          </div>
          <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center border border-purple-100">
            <i className="uil uil-history-alt text-3xl"></i>
          </div>
        </Link>

      </div>

      {/* Dynamic Visual Graphs Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* SVG Donut Visual Chart card */}
        <Link href="/admin/leads" className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between items-center text-center transition-all hover:shadow-md cursor-pointer block">
          <div className="w-full flex items-center gap-2 mb-4 border-b border-gray-50 pb-3">
            <i className="uil uil-chart-pie-alt text-xl text-blue-500 bg-blue-50 p-1.5 rounded-lg"></i>
            <h2 className="text-base font-bold text-gray-900">Loan Type Ratio</h2>
          </div>
          
          {total > 0 ? (
            <div className="relative flex items-center justify-center py-4">
              <svg viewBox="0 0 42 42" className="w-40 h-40 transform -rotate-90">
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#F1F5F9" strokeWidth="4"></circle>
                
                {/* Personal (Blue) */}
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#3B82F6" strokeWidth="4" 
                  strokeDasharray={`${p1} ${100 - p1}`} strokeDashoffset={100 - o1}></circle>
                  
                {/* Business (Green) */}
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#10B981" strokeWidth="4" 
                  strokeDasharray={`${p2} ${100 - p2}`} strokeDashoffset={100 - o2}></circle>
                  
                {/* Overdraft (Orange) */}
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#F59E0B" strokeWidth="4" 
                  strokeDasharray={`${p3} ${100 - p3}`} strokeDashoffset={100 - o3}></circle>
                  
                {/* Consolidation (Purple) */}
                <circle cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#8B5CF6" strokeWidth="4" 
                  strokeDasharray={`${p4} ${100 - p4}`} strokeDashoffset={100 - o4}></circle>
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="text-2xl font-black text-slate-800">{total}</span>
                <span className="text-[10px] text-slate-400 font-extrabold uppercase">Leads</span>
              </div>
            </div>
          ) : (
            <div className="py-14 text-slate-400 font-bold text-sm">No chart data.</div>
          )}

          <div className="w-full grid grid-cols-2 gap-2 text-left text-xs pt-4 border-t border-gray-50">
            <div className="flex items-center gap-1.5 font-semibold text-slate-600">
              <span className="w-3 h-3 rounded-full bg-[#3B82F6] inline-block"></span>
              Personal ({Math.round(p1)}%)
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-600">
              <span className="w-3 h-3 rounded-full bg-[#10B981] inline-block"></span>
              Business ({Math.round(p2)}%)
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-600">
              <span className="w-3 h-3 rounded-full bg-[#F59E0B] inline-block"></span>
              Overdraft ({Math.round(p3)}%)
            </div>
            <div className="flex items-center gap-1.5 font-semibold text-slate-600">
              <span className="w-3 h-3 rounded-full bg-[#8B5CF6] inline-block"></span>
              Consol. ({Math.round(p4)}%)
            </div>
          </div>
        </Link>

        {/* Dynamic Funnel Conversion Chart card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between col-span-1 lg:col-span-2">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-3">
              <i className="uil uil-analytics text-xl text-emerald-500 bg-emerald-50 p-1.5 rounded-lg"></i>
              <h2 className="text-base font-bold text-gray-900">Application Funnel Conversion</h2>
            </div>
            <div className="space-y-4 py-2">
              {[
                { name: "Approved", status: "approved", count: approvedLeads, color: "bg-emerald-500", pct: total > 0 ? (approvedLeads / total) * 100 : 0 },
                { name: "In Progress", status: "in_progress", count: inProgressLeads, color: "bg-blue-500", pct: total > 0 ? (inProgressLeads / total) * 100 : 0 },
                { name: "Pending Review", status: "pending", count: pendingLeads, color: "bg-amber-500", pct: total > 0 ? (pendingLeads / total) * 100 : 0 },
                { name: "Rejected", status: "rejected", count: rejectedLeads, color: "bg-red-500", pct: total > 0 ? (rejectedLeads / total) * 100 : 0 },
                { name: "Stuck / Blocked", status: "stuck", count: stuckLeads, color: "bg-slate-400", pct: total > 0 ? (stuckLeads / total) * 100 : 0 },
                { name: "Abandoned (Drafts)", status: "abandoned", count: abandonedLeads, color: "bg-purple-500", pct: total > 0 ? (abandonedLeads / total) * 100 : 0 },
              ].map((item) => (
                <Link key={item.name} href={`/admin/leads?status=${item.status}`} className="block space-y-1.5 transition-all hover:opacity-80 cursor-pointer">
                  <div className="flex justify-between text-xs font-bold text-slate-600">
                    <span>{item.name}</span>
                    <span>{item.count} leads ({Math.round(item.pct)}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div 
                      className={`${item.color} h-full rounded-full transition-all duration-1000`} 
                      style={{ width: `${item.pct}%` }}
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
      
      {/* Lower Dashboard Section Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Clickable Leads by Loan Type Panel */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4 border-b border-gray-50 pb-3">
              <i className="uil uil-bill text-xl text-blue-500 bg-blue-50 p-1.5 rounded-lg"></i>
              <h2 className="text-lg font-bold text-gray-900">Leads by Loan Type (Click to Filter)</h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'Personal', icon: 'uil uil-user', bg: 'hover:bg-blue-50 hover:border-blue-200', text: 'text-blue-600', color: '#3B82F6' },
                { name: 'Business', icon: 'uil uil-store', bg: 'hover:bg-emerald-50 hover:border-emerald-200', text: 'text-emerald-600', color: '#10B981' },
                { name: 'Overdraft', icon: 'uil uil-university', bg: 'hover:bg-amber-50 hover:border-amber-200', text: 'text-amber-600', color: '#F59E0B' },
                { name: 'Debt Consolidation', icon: 'uil uil-arrows-merge', bg: 'hover:bg-purple-50 hover:border-purple-200', text: 'text-purple-600', color: '#8B5CF6' }
              ].map(type => (
                <Link 
                  key={type.name} 
                  href={`/admin/leads?type=${type.name}`}
                  className={`flex flex-col p-4 border border-gray-100 rounded-2xl transition-all cursor-pointer shadow-sm ${type.bg}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center bg-slate-50 ${type.text}`}>
                      <i className={type.icon}></i>
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-500 font-extrabold py-0.5 px-2 rounded-md uppercase tracking-wider">
                      Details →
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-700">{type.name}</h3>
                  <p className="text-2xl font-black text-slate-900 mt-1">
                    {typeCounts[type.name] || 0}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
