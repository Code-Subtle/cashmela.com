"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createBrowserClient } from "@supabase/ssr";
import { useState } from "react";

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [loansOpen, setLoansOpen] = useState(
    pathname?.startsWith("/admin/loans") ?? false
  );

  if (pathname === "/admin/login") {
    return null;
  }

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const handleLogout = async () => {
    setIsLoggingOut(true);
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const loanItems = [
    { name: "Personal Loan",       href: "/admin/loans/personal",      icon: "uil uil-user-circle", color: "text-blue-400"   },
    { name: "Business Loan",       href: "/admin/loans/business",      icon: "uil uil-store",       color: "text-emerald-400" },
    { name: "Overdraft",           href: "/admin/loans/overdraft",     icon: "uil uil-university",  color: "text-amber-400"  },
    { name: "Debt Consolidation",  href: "/admin/loans/consolidation", icon: "uil uil-arrows-merge",color: "text-purple-400" },
  ];

  const navLink = (href, icon, label, exact = false) => {
    const isActive = exact ? pathname === href : pathname?.startsWith(href);
    return (
      <Link
        href={href}
        className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-semibold ${
          isActive
            ? "bg-blue-600 text-white shadow-md"
            : "text-gray-400 hover:bg-gray-800 hover:text-white"
        }`}
      >
        <i className={`${icon} text-lg w-5 text-center`}></i>
        {label}
      </Link>
    );
  };

  return (
    <div className="flex flex-col w-64 bg-gray-900 text-white min-h-screen p-4 border-r border-gray-800">

      {/* Logo */}
      <div className="mb-6 px-2 flex items-center gap-2 border-b border-gray-800 pb-5">
        <img src="/logo.webp" alt="CashMela" className="h-9 w-auto object-contain" />
        <span className="text-[10px] font-black bg-blue-600/20 text-blue-400 py-0.5 px-2 rounded-md uppercase tracking-wider self-end mb-0.5 border border-blue-500/25">
          Admin
        </span>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto pb-4">

        {/* ── Overview ── */}
        <p className="text-[10px] font-extrabold text-gray-600 uppercase tracking-widest px-3 mb-2">Overview</p>
        {navLink("/admin",       "uil uil-chart-bar",  "Dashboard",  true)}
        {navLink("/admin/leads", "uil uil-users-alt",  "All Leads",  true)}

        {/* ── Loan Sections ── */}
        <p className="text-[10px] font-extrabold text-gray-600 uppercase tracking-widest px-3 pt-4 mb-2">Loan Sections</p>

        <button
          onClick={() => setLoansOpen((o) => !o)}
          className={`w-full flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl transition-all text-sm font-semibold ${
            pathname?.startsWith("/admin/loans")
              ? "bg-gray-800 text-white"
              : "text-gray-400 hover:bg-gray-800 hover:text-white"
          }`}
        >
          <span className="flex items-center gap-3">
            <i className="uil uil-receipt text-lg w-5 text-center"></i>
            Loan Categories
          </span>
          <i className={`uil uil-angle-${loansOpen ? "up" : "down"} text-base`}></i>
        </button>

        {loansOpen && (
          <div className="ml-3 mt-1 space-y-0.5 border-l border-gray-800 pl-3">
            {loanItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-lg transition-all text-sm font-semibold ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-400 hover:bg-gray-800 hover:text-white"
                  }`}
                >
                  <i className={`${item.icon} text-base ${isActive ? "text-white" : item.color}`}></i>
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}

        {/* ── System ── */}
        <p className="text-[10px] font-extrabold text-gray-600 uppercase tracking-widest px-3 pt-4 mb-2">System</p>
        {navLink("/admin/settings", "uil uil-setting", "Settings", true)}

      </nav>

      {/* Logout */}
      <div className="border-t border-gray-800 pt-4">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="flex w-full items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-red-500/10 hover:text-red-400 rounded-xl transition-all text-sm font-semibold"
        >
          <i className="uil uil-sign-out-alt text-lg w-5 text-center"></i>
          {isLoggingOut ? "Logging out..." : "Logout"}
        </button>
      </div>
    </div>
  );
}
