import AdminSidebar from "../components/admin/AdminSidebar";

export const metadata = {
  title: "Admin Dashboard | CashMela",
  description: "CashMela Administrative Dashboard",
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50">
        {children}
      </main>
    </div>
  );
}
