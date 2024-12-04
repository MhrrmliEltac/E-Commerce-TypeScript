import { getCurrentUser } from "@/app/actions/getCurrentUser";
import CreateProductClient from "@/app/components/admin/CreateProductClient";
import AuthContainer from "@/app/components/containers/AuthContainer";
import WarningText from "@/app/components/WarningText";


const CreateProduct = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser || currentUser.role !== "ADMIN") {
    return <WarningText text="Giriş qadağandır" />;
  }

  return (
    <AuthContainer>
      <CreateProductClient />
    </AuthContainer>
  );
};

export default CreateProduct;
