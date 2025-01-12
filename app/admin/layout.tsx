import AdminSidebar from "../components/admin/AdminSidebar";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex gap-2">
      <AdminSidebar />
      {children}
    </div>
  );
};

export default AdminLayout;
