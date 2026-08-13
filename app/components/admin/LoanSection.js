"use client";

import Link from "next/link";
import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

const STATUS_CONFIG = {
  pending:     { label: "Pending",     color: "bg-amber-500",  text: "text-amber-700",  bg: "bg-amber-50",  border: "border-amber-200"  },
  in_progress: { label: "In Progress", color: "bg-blue-500",   text: "text-blue-700",   bg: "bg-blue-50",   border: "border-blue-200"   },
  approved:    { label: "Approved",    color: "bg-emerald-500",text: "text-emerald-700",bg: "bg-emerald-50",border: "border-emerald-200"},
  rejected:    { label: "Rejected",    color: "bg-red-500",    text: "text-red-700",    bg: "bg-red-50",    border: "border-red-200"    },
  stuck:       { label: "Stuck",       color: "bg-slate-400",  text: "text-slate-700",  bg: "bg-slate-50",  border: "border-slate-200"  },
  abandoned:   { label: "Abandoned",   color: "bg-purple-500", text: "text-purple-700", bg: "bg-purple-50", border: "border-purple-200" },
};

const LOAN_CONFIG = {
  Personal:           { label: "Personal Loan",      icon: "uil-user-circle",  accent: "#3B82F6", bgLight: "bg-blue-50",   textAccent: "text-blue-600",   borderAccent: "border-blue-200"   },
  Business:           { label: "Business Loan",      icon: "uil-store",        accent: "#10B981", bgLight: "bg-emerald-50",textAccent: "text-emerald-600",borderAccent: "border-emerald-200"},
  Overdraft:          { label: "Overdraft Loan",     icon: "uil-university",   accent: "#F59E0B", bgLight: "bg-amber-50",  textAccent: "text-amber-600",  borderAccent: "border-amber-200"  },
  "Debt Consolidation":{ label: "Debt Consolidation",icon: "uil-arrows-merge", accent: "#8B5CF6", bgLight: "bg-purple-50", textAccent: "text-purple-600", borderAccent: "border-purple-200" },
};

const formatINR = (num) =>
  num != null ? `₹${Math.round(Number(num)).toLocaleString("en-IN")}` : "—";

const formatDate = (iso) =>
  iso
    ? new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })
    : "—";

export default function LoanSection({ loanType, leads: initialLeads = [] }) {
  const cfg = LOAN_CONFIG[loanType] || LOAN_CONFIG["Personal"];

  const [leads, setLeads] = useState(initialLeads);
  const [savingId, setSavingId] = useState(null);
  const [toast, setToast] = useState(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleStatusChange = async (leadId, newStatus) => {
    setSavingId(leadId);
    try {
      const { error } = await supabase
        .from("leads")
        .update({ status: newStatus, updated_at: new Date().toISOString() })
        .eq("id", leadId);

      if (error) throw error;

      setLeads((prev) =>
        prev.map((l) => (l.id === leadId ? { ...l, status: newStatus } : l))
      );
      showToast("Status updated successfully!");
    } catch (err) {
      console.error("Error updating status:", err);
      showToast(err.message || "Failed to update status", "error");
    } finally {
      setSavingId(null);
    }
  };

  const total = leads.length;

  const statusCounts = Object.fromEntries(
    Object.keys(STATUS_CONFIG).map((s) => [
      s,
      leads.filter((l) => l.status === s).length,
    ])
  );

  const totalAmount    = leads.reduce((a, l) => a + (Number(l.loan_amount) || 0), 0);
  const totalIncome    = leads.reduce((a, l) => a + (Number(l.monthly_income) || 0), 0);
  const avgAmount      = total > 0 ? totalAmount / total : 0;
  const avgIncome      = total > 0 ? totalIncome / total : 0;
  const conversionRate = total > 0 ? Math.round((statusCounts.approved / total) * 100) : 0;

  return (
    <div className="p-8 space-y-8">

      {/* ── Toast ── */}
      {toast && (
        <div
          className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border animate-in slide-in-from-top duration-300 ${
            toast.type === "success"
              ? "bg-emerald-50 text-emerald-800 border-emerald-200"
              : "bg-red-50 text-red-800 border-red-200"
          }`}
        >
          <i className={`uil ${toast.type === "success" ? "uil-check-circle" : "uil-exclamation-octagon"} text-xl`} />
          <span className="text-sm font-semibold">{toast.message}</span>
        </div>
      )}

      {/* ── Page Header ── */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-100 pb-5">
        <div className="flex items-center gap-4">
          <div className={`w-12 h-12 ${cfg.bgLight} rounded-xl flex items-center justify-center border ${cfg.borderAccent}`}>
            <i className={`uil ${cfg.icon} text-2xl ${cfg.textAccent}`}></i>
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900 leading-tight">{cfg.label}</h1>
            <p className="text-xs text-gray-500 font-semibold mt-0.5">
              {total} total leads · Update status inline using the dropdown on each row
            </p>
          </div>
        </div>
        <Link
          href={`/admin/leads?type=${encodeURIComponent(loanType)}`}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold text-white transition-all shadow-md`}
          style={{ backgroundColor: cfg.accent }}
        >
          <i className="uil uil-external-link-alt"></i>
          Open in Leads Manager
        </Link>
      </div>

      {/* ── KPI Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Applications", value: total,                  icon: "uil-file-alt",      color: "text-blue-500",   bg: "bg-blue-50",    border: "border-blue-100"   },
          { label: "Total Loan Amount",  value: formatINR(totalAmount), icon: "uil-money-bill",    color: "text-emerald-500",bg: "bg-emerald-50", border: "border-emerald-100"},
          { label: "Total Monthly Salary",value: formatINR(totalIncome),icon: "uil-wallet",        color: "text-amber-500",  bg: "bg-amber-50",   border: "border-amber-100"  },
          { label: "Approval Rate",      value: `${conversionRate}%`,   icon: "uil-percentage",    color: "text-purple-500", bg: "bg-purple-50",  border: "border-purple-100" },
        ].map((kpi) => (
          <div key={kpi.label} className="bg-white rounded-2xl border border-gray-100 p-5 flex items-center justify-between shadow-sm hover:shadow-md transition-all">
            <div>
              <p className="text-[10px] font-extrabold text-gray-400 uppercase tracking-wider mb-1">{kpi.label}</p>
              <p className="text-2xl font-black text-gray-900">{kpi.value}</p>
            </div>
            <div className={`w-11 h-11 ${kpi.bg} ${kpi.color} rounded-xl flex items-center justify-center border ${kpi.border}`}>
              <i className={`uil ${kpi.icon} text-xl`}></i>
            </div>
          </div>
        ))}
      </div>

      {/* ── Charts Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Status Funnel Bars */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <i className={`uil uil-analytics text-xl ${cfg.textAccent} ${cfg.bgLight} p-1.5 rounded-lg border ${cfg.borderAccent}`}></i>
            <h2 className="text-base font-bold text-gray-900">Application Status Breakdown</h2>
          </div>
          <div className="space-y-4">
            {Object.entries(STATUS_CONFIG).map(([key, sc]) => {
              const count = statusCounts[key] || 0;
              const pct = total > 0 ? (count / total) * 100 : 0;
              return (
                <div key={key}>
                  <div className="flex justify-between text-xs font-bold text-slate-600 mb-1.5">
                    <span>{sc.label}</span>
                    <span>{count} leads ({Math.round(pct)}%)</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`${sc.color} h-full rounded-full transition-all duration-700`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Employment type breakdown */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
            <i className={`uil uil-briefcase-alt text-xl ${cfg.textAccent} ${cfg.bgLight} p-1.5 rounded-lg border ${cfg.borderAccent}`}></i>
            <h2 className="text-base font-bold text-gray-900">Employment Type Split</h2>
          </div>
          {(() => {
            const emp = leads.reduce((a, l) => {
              const k = l.employment_type || "Unknown";
              a[k] = (a[k] || 0) + 1;
              return a;
            }, {});
            const entries = Object.entries(emp);
            if (!entries.length) return <p className="text-gray-400 text-sm font-bold py-8 text-center">No data yet.</p>;
            return (
              <div className="space-y-3">
                {entries.map(([type, count]) => {
                  const pct = Math.round((count / total) * 100);
                  return (
                    <div key={type} className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <i className="uil uil-suitcase text-slate-400"></i>
                        <span className="text-sm font-bold text-slate-700 truncate">{type}</span>
                      </div>
                      <div className="flex items-center gap-3 shrink-0">
                        <div className="w-28 bg-slate-100 h-2 rounded-full overflow-hidden">
                          <div className="h-full rounded-full" style={{ width: `${pct}%`, backgroundColor: cfg.accent }} />
                        </div>
                        <span className="text-xs font-extrabold text-slate-500 w-8 text-right">{count}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          })()}
        </div>

      </div>

      {/* ── Lead Table ── */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center gap-2">
          <i className={`uil uil-list-ul text-xl ${cfg.textAccent} ${cfg.bgLight} p-1.5 rounded-lg border ${cfg.borderAccent}`}></i>
          <h2 className="text-base font-bold text-gray-900">{cfg.label} Applications</h2>
          <span className="ml-auto text-xs bg-gray-100 text-gray-500 font-extrabold px-2.5 py-0.5 rounded-full">{total} total</span>
        </div>

        {total === 0 ? (
          <div className="py-16 text-center text-gray-400 font-bold">
            <i className="uil uil-inbox text-5xl text-gray-200 block mb-3"></i>
            No {cfg.label} applications found yet.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-100">
              <thead className="bg-gray-50 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <tr>
                  {["Date", "Name", "Mobile", "Amount", "Salary", "Pincode"].map((h) => (
                    <th key={h} className="px-5 py-3 text-left whitespace-nowrap">{h}</th>
                  ))}
                  <th className="px-5 py-3 text-left whitespace-nowrap">Status</th>
                  <th className="px-5 py-3 text-right whitespace-nowrap">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {leads.map((lead) => {
                  const sc = STATUS_CONFIG[lead.status] || STATUS_CONFIG.pending;
                  const isSaving = savingId === lead.id;
                  return (
                    <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                      <td className="px-5 py-3.5 text-xs text-gray-500 font-semibold whitespace-nowrap">{formatDate(lead.created_at)}</td>
                      <td className="px-5 py-3.5 text-sm font-bold text-gray-900 whitespace-nowrap">{lead.full_name || "—"}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600 font-semibold whitespace-nowrap">{lead.mobile_number || "—"}</td>
                      <td className="px-5 py-3.5 text-sm font-bold text-gray-900 whitespace-nowrap">{formatINR(lead.loan_amount)}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600 font-semibold whitespace-nowrap">{formatINR(lead.monthly_income)}</td>
                      <td className="px-5 py-3.5 text-sm text-gray-600 font-semibold whitespace-nowrap">{lead.pincode || "—"}</td>

                      {/* ── Inline Status Dropdown ── */}
                      <td className="px-5 py-3.5 whitespace-nowrap">
                        <div className="relative inline-flex items-center gap-1.5">
                          {/* Coloured dot */}
                          <span className={`w-2 h-2 rounded-full ${sc.color} shrink-0`} />
                          <select
                            value={lead.status || "pending"}
                            disabled={isSaving}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                            className={`pr-6 pl-1 py-1 text-xs font-bold rounded-lg border appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-offset-1 transition-all disabled:opacity-50 disabled:cursor-wait ${sc.text} ${sc.bg} ${sc.border}`}
                            style={{ backgroundImage: "none" }}
                          >
                            {Object.entries(STATUS_CONFIG).map(([val, s]) => (
                              <option key={val} value={val}>{s.label}</option>
                            ))}
                          </select>
                          {/* Chevron icon */}
                          {isSaving ? (
                            <svg className="absolute right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 animate-spin text-current pointer-events-none" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                          ) : (
                            <i className="uil uil-angle-down absolute right-1 top-1/2 -translate-y-1/2 text-current pointer-events-none text-sm" />
                          )}
                        </div>
                      </td>

                      <td className="px-5 py-3.5 text-right whitespace-nowrap">
                        <Link
                          href={`/admin/leads?type=${encodeURIComponent(loanType)}`}
                          className={`inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-lg border transition-all ${cfg.textAccent} ${cfg.bgLight} ${cfg.borderAccent} hover:opacity-80`}
                        >
                          <i className="uil uil-eye"></i> Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

    </div>
  );
}
