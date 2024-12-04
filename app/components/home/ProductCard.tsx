"use client";
import TextClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { SlBasket } from "react-icons/sl";

const ProductCard = ({ product }: { product: any }) => {
  const router = useRouter();

  const productRating =
    product?.reviews?.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product?.reviews?.length;

  return (
    <div
      onClick={() => router.push(`product/${product.id}`)}
      className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-md"
    >
      <div className="relative h-[150px]">
        <Image
          src={product.image}
          fill
          alt="Product image"
          className="object-contain"
        />
      </div>
      <div className="mt-2">
        <div className="text-sm font-bold">{TextClip(product.name)}</div>
        <Rating name="read-only" value={productRating} readOnly size="small" />
        <div className="flex items-center justify-between">
          <div className="text-black-600 text-lg font-bold md:text-xl">
            {product.price} ₼
          </div>
          <div className="border border-black p-2 rounded-md bg-white text-black hover:bg-orange-600 hover:border-white hover:text-white transition-background duration-500">
            <SlBasket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
