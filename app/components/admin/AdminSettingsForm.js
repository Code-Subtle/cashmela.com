"use client";

import { useState } from "react";
import { createBrowserClient } from "@supabase/ssr";

export default function AdminSettingsForm({ user }) {
  const [email, setEmail] = useState(user?.email || "");
  const [password, setPassword] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [toast, setToast] = useState(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      const updates = {};
      if (email !== user.email) {
        updates.email = email;
      }
      if (password.trim() !== "") {
        updates.password = password;
      }

      if (Object.keys(updates).length > 0) {
        const { error } = await supabase.auth.updateUser(updates);
        if (error) throw error;
      }

      showToast("Settings updated successfully!");
      setPassword(""); // Clear password field after successful update
    } catch (error) {
      console.error("Error updating settings:", error);
      showToast(error.message || "Failed to update settings", "error");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="relative">
      {toast && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg border animate-in slide-in-from-top duration-300 ${
          toast.type === "success" ? "bg-emerald-50 text-emerald-800 border-emerald-200" : "bg-red-50 text-red-800 border-red-200"
        }`}>
          <i className={`uil ${toast.type === 'success' ? 'uil-check-circle' : 'uil-exclamation-octagon'} text-xl`}></i>
          <span className="text-sm font-semibold">{toast.message}</span>
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 font-semibold text-gray-800 transition-all"
            placeholder="admin@cashmela.com"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            New Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-500 font-semibold text-gray-800 transition-all"
            placeholder="Leave blank to keep current password"
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSaving}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-all flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <i className="uil uil-spinner animate-spin"></i>
                Saving...
              </>
            ) : (
              <>
                <i className="uil uil-save"></i>
                Save Changes
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
