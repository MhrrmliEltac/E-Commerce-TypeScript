"use client";
import AdminSidebarItem from "./AdminSidebarItem";
import { MdDashboard, MdOutlineManageSearch } from "react-icons/md";
import { BiDialpad } from "react-icons/bi";
import { IoCreateOutline } from "react-icons/io5";
import { usePathname } from "next/navigation";

const AdminSidebar = () => {
  const pathname = usePathname();
  const adminPanel = [
    {
      name: "Dashboard",
      url: "/admin",
      icon: MdDashboard,
    },
    {
      name: "Məhsul Yarat",
      url: "/admin/create",
      icon: IoCreateOutline,
    },
    {
      name: "Məhsulları idarə et",
      url: "/admin/manage",
      icon: MdOutlineManageSearch,
    },
    {
      name: "Sifarişlər",
      url: "/admin/order",
      icon: BiDialpad,
    },
  ];

  return (
    <div className="w-1/6 h-screen bg-[#F8F9FC] border-r p-4 shadow-lg">
      <div className="space-y-4">
        {adminPanel.map((admin, i) => (
          <AdminSidebarItem
            selected={pathname === admin.url}
            name={admin.name}
            icon={admin.icon}
            url={admin.url}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AdminSidebar;
