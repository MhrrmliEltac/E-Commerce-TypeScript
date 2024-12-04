import Link from "next/link";
import { IconType } from "react-icons";

interface AdminPanel {
  selected?: boolean;
  name: string;
  icon: IconType;
  url: string;
}

const AdminSidebarItem: React.FC<AdminPanel> = ({
  selected,
  name,
  icon: Icon,
  url,
}) => {
  return (
    <Link
      className={`flex gap-2 items-center text-sm  p-2 ${
        selected
          ? "text-[#fff] font-medium bg-[#FA812F] border-[#FAB12F]"
          : "text-[#FA4032] font-medium"
      } hover:text-[#fff] rounded-md hover:bg-[#FA812F] transition-all duration-200`}
      href={url}
    >
      <Icon size={25} />
      <div>{name}</div>
    </Link>
  );
};

export default AdminSidebarItem;
