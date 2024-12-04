"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import { useState } from "react";
import Counter from "../general/Counter";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Comment from "./Comment";
import UseCart from "@/hooks/useCart";

export type CardProductProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { addToBasket, cartPrdcts, productCartQty } = UseCart();

  console.log(cartPrdcts, "cartPrdcts");
  console.log(productCartQty, "productCartQty");

  const [productCard, setProductCard] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    price: product.price,
    quantity: 1,
    description: product.description,
    image: product.image,
    inStock: product.inStock,
  });

  const increaseFunc = () => {
    if (productCard.quantity === 10) return;
    setProductCard((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };
  const decreaseFunc = () => {
    if (productCard.quantity === 0) return;
    setProductCard((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  const productRating =
    product?.reviews?.reduce((acc: number, item: any) => item.rating + acc, 0) /
    product?.reviews?.length;

  return (
    <div className="my-5 md:my-10">
      <PageContainer>
        <div className="block md:flex gap-10 justify-center">
          <div className="relative h-[200px] md:h-[400px] w-[200px] md:w-[400px] mb-3 md:mb-0">
            <Image src={product?.image} fill alt="Product Image" />
          </div>
          <div className="space-y-2 w-full md:w-1/2">
            <div className="text-xl md:text-2xl font-bold">{product.name}</div>
            <Rating name="read-only" value={productRating} readOnly />
            <div className="text-slate-500 text-md">{product?.description}</div>
            <div className="flex items-center gap-2">
              <div className="">Stok Statusu:</div>
              {product?.inStock ? (
                <div className="text-green-500">Məhsul stokda mövcuddur</div>
              ) : (
                <div className="text-red-500">Məhsul stokda mövcud deyil</div>
              )}
            </div>
            <Counter
              cardProduct={productCard}
              increaseFunc={increaseFunc}
              decreaseFunc={decreaseFunc}
            />
            <div className="text-lg md:text-xl text-orange-500 font-bold">
              {product.price} ₼
            </div>
            <Button
              onClick={() => addToBasket(productCard)}
              text="Səbətə əlavə et"
            />
          </div>
        </div>
        <div>
          <Comment prd={product.reviews} />
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;
