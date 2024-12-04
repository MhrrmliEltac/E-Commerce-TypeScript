import { products } from "@/utils/Product";
import dynamic from "next/dynamic";
import React from "react";
type DetailProps = {
  productId?: string;
};

const Detail = async ({ params }: { params: DetailProps }) => {
  const { productId } = await params;
  const product = products.find((product) => product.id === productId);

  const DetailClient = dynamic(
    () => import("@/app/components/detail/DetailClient")
  );

  return (
    <div>
      <DetailClient product={product} />
    </div>
  );
};

export default Detail;
