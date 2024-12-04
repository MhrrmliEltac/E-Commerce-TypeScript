import { getCurrentUser } from "@/app/actions/getCurrentUser";
import getProduct from "@/app/actions/getProduct";
import ManageProductClient from "@/app/components/admin/ManageProductClient";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/WarningText";

const Manage = async () => {
  const products = await getProduct({ category: null });
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Giriş qadağandır" />;
  }

  return (
    <div className="m-4">
      <ManageProductClient product={products} />
    </div>
  );
};

export default Manage;
