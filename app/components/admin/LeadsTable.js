"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";

const getPincodeLocation = (pincode) => {
  if (!pincode || pincode.length < 3) return "N/A";
  if (pincode.startsWith("400")) return "Mumbai, Maharashtra";
  if (pincode.startsWith("560")) return "Bengaluru, Karnataka";
  if (pincode.startsWith("110")) return "New Delhi, Delhi";
  if (pincode.startsWith("600")) return "Chennai, Tamil Nadu";
  if (pincode.startsWith("700")) return "Kolkata, West Bengal";
  if (pincode.startsWith("500")) return "Hyderabad, Telangana";
  if (pincode.startsWith("380")) return "Ahmedabad, Gujarat";
  if (pincode.startsWith("411")) return "Pune, Maharashtra";
  return "Verified Indian Location";
};

export default function LeadsTable({ initialLeads }) {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || "all";
  const initialStatus = searchParams.get("status") || "all";

  const [leads, setLeads] = useState(initialLeads || []);
  const [selectedLead, setSelectedLead] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState(initialStatus);
  const [loanTypeFilter, setLoanTypeFilter] = useState(initialType);
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState(null);
  
  // Note edit state
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const [isDeleting, setIsDeleting] = useState(false);
  
  // PAN hover reveal state
  const [revealPan, setRevealPan] = useState(false);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  // Sync state if search parameter changes
  useEffect(() => {
    const type = searchParams.get("type");
    if (type) {
      setLoanTypeFilter(type);
    } else {
      setLoanTypeFilter("all");
    }

    const status = searchParams.get("status");
    if (status) {
      setStatusFilter(status);
    } else {
      setStatusFilter("all");
    }
  }, [searchParams]);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleOpenDetails = (lead) => {
    setSelectedLead(lead);
    setEditNotes(lead.notes || "");
    setEditStatus(lead.status || "pending");
    setRevealPan(false);
    setEditData({ ...lead });
    setIsEditing(false);
  };

  const handleSaveChanges = async () => {
    if (!selectedLead) return;
    setIsSaving(true);
    try {
      const { error } = await supabase
        .from("leads")
        .update({
          ...editData,
          status: editStatus,
          notes: editNotes,
          updated_at: new Date().toISOString()
        })
        .eq("id", selectedLead.id);

      if (error) throw error;

      // Update local leads list
      setLeads((prev) =>
        prev.map((l) =>
          l.id === selectedLead.id
            ? { ...l, ...editData, status: editStatus, notes: editNotes, updated_at: new Date().toISOString() }
            : l
        )
      );

      showToast("Lead updated successfully!");
      setSelectedLead(null);
      setIsEditing(false);
    } catch (err) {
      console.error("Error saving lead details:", err);
      showToast(err.message || "Failed to update lead details", "error");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteLead = async () => {
    if (!selectedLead) return;
    if (!window.confirm("Are you sure you want to completely delete this lead? This cannot be undone.")) return;
    setIsDeleting(true);
    try {
      const { error } = await supabase.from("leads").delete().eq("id", selectedLead.id);
      if (error) throw error;
      setLeads((prev) => prev.filter((l) => l.id !== selectedLead.id));
      showToast("Lead deleted successfully!");
      setSelectedLead(null);
    } catch (err) {
      console.error("Error deleting lead:", err);
      showToast(err.message || "Failed to delete lead", "error");
    } finally {
      setIsDeleting(false);
    }
  };

  // Search & filter leads logic
  const filteredLeads = leads.filter((lead) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      (lead.full_name || "").toLowerCase().includes(query) ||
      (lead.mobile_number || "").toLowerCase().includes(query) ||
      (lead.pincode || "").toLowerCase().includes(query) ||
      (lead.loan_type || "").toLowerCase().includes(query) ||
      (lead.pan_number || "").toLowerCase().includes(query);

    const matchesStatus =
      statusFilter === "all" || lead.status === statusFilter;

    const matchesLoanType =
      loanTypeFilter === "all" || lead.loan_type === loanTypeFilter;

    return matchesSearch && matchesStatus && matchesLoanType;
  });

  return (
    <div className="space-y-6">
      
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border animate-in slide-in-from-top duration-300 ${
          toast.type === "success" 
            ? "bg-emerald-50 text-emerald-800 border-emerald-200" 
            : "bg-red-50 text-red-800 border-red-200"
        }`}>
          <i className={`uil ${toast.type === 'success' ? 'uil-check-circle' : 'uil-exclamation-octagon'} text-xl`}></i>
          <span className="text-sm font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Premium Search and Filtering Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
        
        {/* Search Field */}
        <div className="relative">
          <i className="uil uil-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          <input
            type="text"
            placeholder="Search leads..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all font-semibold"
          />
        </div>

        {/* Status Filter */}
        <div className="relative">
          <i className="uil uil-filter absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 appearance-none cursor-pointer font-semibold"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in_progress">In Progress</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
            <option value="stuck">Stuck</option>
            <option value="abandoned">Abandoned (Drafts)</option>
          </select>
          <i className="uil uil-angle-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none"></i>
        </div>

        {/* Loan Type Filter */}
        <div className="relative">
          <i className="uil uil-receipt absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>
          <select
            value={loanTypeFilter}
            onChange={(e) => setLoanTypeFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm outline-none focus:border-blue-500 appearance-none cursor-pointer font-semibold"
          >
            <option value="all">All Loan Types</option>
            <option value="Personal">Personal Loan</option>
            <option value="Business">Business Loan</option>
            <option value="Overdraft">Overdraft Loan</option>
            <option value="Debt Consolidation">Debt Consolidation</option>
          </select>
          <i className="uil uil-angle-down absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg pointer-events-none"></i>
        </div>

        {/* Total stats count indicator */}
        <div className="flex items-center justify-end px-2 text-sm text-gray-500 font-bold">
          <i className="uil uil-database text-lg text-blue-500 mr-2"></i>
          Showing {filteredLeads.length} of {leads.length}
        </div>
      </div>

      {/* Main Table view */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Mobile
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Loan Type
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-6 py-3 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan="7" className="px-6 py-12 text-center text-gray-400 font-bold">
                    <i className="uil uil-search-minus text-4xl text-gray-300 block mb-2"></i>
                    No matching leads found.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-medium">
                      {new Date(lead.updated_at || lead.created_at).toLocaleDateString("en-IN", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric"
                      })}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-bold text-gray-900">{lead.full_name || "N/A"}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                      {lead.mobile_number}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                        {lead.loan_type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-bold">
                      ₹{lead.loan_amount?.toLocaleString("en-IN") || "0"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full border
                        ${lead.status === 'pending' ? 'bg-amber-50 text-amber-700 border-amber-200' : ''}
                        ${lead.status === 'in_progress' ? 'bg-blue-50 text-blue-700 border-blue-200' : ''}
                        ${lead.status === 'approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : ''}
                        ${lead.status === 'rejected' ? 'bg-red-50 text-red-700 border-red-200' : ''}
                        ${lead.status === 'stuck' ? 'bg-slate-50 text-slate-700 border-slate-200' : ''}
                        ${lead.status === 'abandoned' ? 'bg-purple-50 text-purple-700 border-purple-200' : ''}
                      `}>
                        {lead.status === 'in_progress' ? 'In Progress' : lead.status.charAt(0).toUpperCase() + lead.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-semibold">
                      <button 
                        onClick={() => handleOpenDetails(lead)}
                        className="inline-flex items-center gap-1 text-blue-600 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 px-3 py-1.5 rounded-lg transition-all"
                      >
                        <i className="uil uil-eye"></i>
                        View Details
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stunning Lead Details Dialog Modal */}
      {selectedLead && (
        <div className="fixed inset-0 z-40 flex items-center justify-center p-4 bg-gray-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 max-w-2xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden p-6 sm:p-8 space-y-6 animate-in zoom-in-95 duration-200">
            
            {/* Header info */}
            <div className="flex justify-between items-start border-b border-slate-100 pb-4">
              <div className="space-y-1">
                <div className="flex items-center gap-3"><p className="text-xs font-bold text-blue-500 uppercase tracking-widest">Lead details</p><button onClick={() => setIsEditing(!isEditing)} className="text-[10px] bg-blue-50 hover:bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full font-bold transition-colors"><i className="uil uil-edit"></i> {isEditing ? "Cancel Edit" : "Edit Mode"}</button></div>
                {isEditing ? <input type="text" value={editData.full_name || ""} onChange={e => setEditData({...editData, full_name: e.target.value})} className="text-2xl font-black text-gray-900 bg-white border border-gray-200 rounded-lg px-3 py-1 outline-none w-full max-w-sm mt-1 focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all" placeholder="Applicant Name" /> : <h2 className="text-2xl font-black text-gray-900">{selectedLead.full_name || "Anonymous Lead"}</h2>}
              </div>
              <button 
                onClick={() => setSelectedLead(null)}
                className="w-10 h-10 flex items-center justify-center bg-slate-50 hover:bg-slate-150 border border-slate-200 text-slate-500 hover:text-slate-700 rounded-full transition-all"
              >
                <i className="uil uil-multiply text-lg"></i>
              </button>
            </div>

            {/* Grid display metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 bg-slate-50 p-6 rounded-2xl border border-slate-100">
              
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Mobile number</p>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <i className="uil uil-phone text-blue-500 text-base"></i>
                  {isEditing ? <input type="text" value={editData.mobile_number || ""} onChange={e => setEditData({...editData, mobile_number: e.target.value})} className="text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : selectedLead.mobile_number || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Email Address</p>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5 truncate">
                  <i className="uil uil-envelope text-blue-500 text-base"></i>
                  {isEditing ? <input type="text" value={editData.email_address || ""} onChange={e => setEditData({...editData, email_address: e.target.value})} className="text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : selectedLead.email_address || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Submission Date</p>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <i className="uil uil-calendar-alt text-blue-500 text-base"></i>
                  {new Date(selectedLead.updated_at || selectedLead.created_at).toLocaleString("en-IN")}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Loan Category</p>
                <p className="text-sm font-extrabold text-blue-600 flex items-center gap-1.5">
                  <i className="uil uil-receipt text-blue-500 text-base"></i>
                  {isEditing ? <select value={editData.loan_type || ""} onChange={e => setEditData({...editData, loan_type: e.target.value})} className="text-sm font-extrabold text-blue-600 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1"><option value="Personal">Personal</option><option value="Business">Business</option><option value="Overdraft">Overdraft</option><option value="Debt Consolidation">Debt Consolidation</option></select> : selectedLead.loan_type}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Requested Amount</p>
                <p className="text-base font-black text-gray-900">
                  {isEditing ? <input type="number" value={editData.loan_amount || ""} onChange={e => setEditData({...editData, loan_amount: e.target.value})} className="text-base font-black text-gray-900 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : "₹" + (selectedLead.loan_amount?.toLocaleString("en-IN") || "0")}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Purpose of Loan</p>
                <p className="text-sm font-bold text-slate-800">
                  {isEditing ? <input type="text" value={editData.loan_purpose || ""} onChange={e => setEditData({...editData, loan_purpose: e.target.value})} className="text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : selectedLead.loan_purpose || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Desired Tenure</p>
                <p className="text-sm font-bold text-emerald-600">
                  {isEditing ? <input type="text" value={editData.desired_tenure || ""} onChange={e => setEditData({...editData, desired_tenure: e.target.value})} className="text-sm font-bold text-emerald-600 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : selectedLead.desired_tenure || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Employment Profile</p>
                <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                  <i className="uil uil-suitcase text-blue-500 text-base"></i>
                  {isEditing ? <select value={editData.employment_type || ""} onChange={e => setEditData({...editData, employment_type: e.target.value})} className="text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1"><option value="Salaried">Salaried</option><option value="Self-Employed">Self-Employed</option></select> : selectedLead.employment_type || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Employer / Business</p>
                <p className="text-sm font-bold text-slate-800 truncate">
                  {isEditing ? <input type="text" value={editData.company_name || ""} onChange={e => setEditData({...editData, company_name: e.target.value})} className="text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : selectedLead.company_name || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Net Income / Salary</p>
                <p className="text-sm font-bold text-gray-900">
                  {isEditing ? <input type="number" value={editData.monthly_income || ""} onChange={e => setEditData({...editData, monthly_income: e.target.value})} className="text-sm font-bold text-gray-900 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : "₹" + (selectedLead.monthly_income?.toLocaleString("en-IN") || "0")}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Existing Monthly EMI</p>
                <p className="text-sm font-bold text-gray-900">
                  {isEditing ? <input type="number" value={editData.current_emi || ""} onChange={e => setEditData({...editData, current_emi: e.target.value})} className="text-sm font-bold text-gray-900 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : "₹" + (selectedLead.current_emi?.toLocaleString("en-IN") || "0")}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Pincode & City</p>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-slate-800 flex items-center gap-1.5">
                    <i className="uil uil-location-pin-alt text-blue-500 text-base"></i>
                    {isEditing ? <input type="text" value={editData.pincode || ""} onChange={e => setEditData({...editData, pincode: e.target.value})} className="text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : selectedLead.pincode || "N/A"} ({selectedLead.city || getPincodeLocation(selectedLead.pincode)})
                  </p>
                </div>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Date of Birth</p>
                <p className="text-sm font-bold text-slate-800">
                  {isEditing ? <input type="text" value={editData.date_of_birth || ""} onChange={e => setEditData({...editData, date_of_birth: e.target.value})} className="text-sm font-bold text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full mt-1" /> : selectedLead.date_of_birth || "N/A"}
                </p>
              </div>

              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">PAN Number</p>
                <div className="flex items-center gap-2">
                  <p className="text-sm font-bold tracking-widest text-slate-800 uppercase">
                    {isEditing ? <input type="text" value={editData.pan_number || ""} onChange={e => setEditData({...editData, pan_number: e.target.value})} className="text-sm font-bold tracking-widest text-slate-800 bg-white border border-slate-200 rounded px-2 py-1 outline-none w-full uppercase mt-1" /> : (revealPan ? selectedLead.pan_number || "N/A" : "••••••••••")}
                  </p>
                  {selectedLead.pan_number && (
                    <button
                      onClick={() => setRevealPan(!revealPan)}
                      className="text-slate-400 hover:text-blue-500 text-base"
                      type="button"
                    >
                      <i className={`uil ${revealPan ? 'uil-eye-slash' : 'uil-eye'}`}></i>
                    </button>
                  )}
                </div>
              </div>

            </div>

            {/* Application Notes */}
            <div className="space-y-2">
              <label htmlFor="notes" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Application Follow-up Notes
              </label>
              <textarea
                id="notes"
                rows={3}
                placeholder="Write any administrative notes..."
                value={editNotes}
                onChange={(e) => setEditNotes(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm font-medium outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all placeholder:text-slate-300"
              />
            </div>

            {/* Dropdown status update */}
            <div className="space-y-2">
              <label htmlFor="status" className="block text-xs font-bold text-slate-500 uppercase tracking-wider">
                Change Application Status
              </label>
              <div className="relative">
                <select
                  id="status"
                  value={editStatus}
                  onChange={(e) => setEditStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm font-bold text-slate-800 outline-none appearance-none cursor-pointer focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
                >
                  <option value="pending">Pending</option>
                  <option value="in_progress">In Progress</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="stuck">Stuck</option>
                  <option value="abandoned">Abandoned</option>
                </select>
                <i className="uil uil-angle-down absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl pointer-events-none"></i>
              </div>
            </div>

            {/* Modal actions */}
            <div className="flex gap-4 border-t border-slate-100 pt-4">
              <button onClick={() => setSelectedLead(null)} className="py-3.5 px-6 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-full font-bold text-sm transition-all focus:outline-none">Cancel</button>
              <button onClick={handleDeleteLead} disabled={isDeleting} className="py-3.5 px-6 bg-red-50 hover:bg-red-600 hover:text-white text-red-600 rounded-full font-bold text-sm transition-all shadow-sm focus:outline-none disabled:opacity-60">{isDeleting ? "Deleting..." : "Delete Lead"}</button>
              <button 
                onClick={handleSaveChanges}
                disabled={isSaving}
                className="flex-1 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-full font-bold text-sm transition-all shadow-md focus:outline-none flex items-center justify-center disabled:opacity-60"
              >
                {isSaving ? "Saving changes..." : "Save Changes"}
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
