"use client";

import UseCart from "@/hooks/useCart";
import PageContainer from "../containers/PageContainer";
import Image from "next/image";
import Button from "../general/Button";
import { CardProductProps } from "../detail/DetailClient";
import Counter from "../general/Counter";

const CartClient = () => {
  const {
    cartPrdcts,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  } = UseCart();

  const cartPrdctsTotal = cartPrdcts
    ?.reduce(
      (acc: any, item: CardProductProps) => acc + item.quantity * item.price,
      0
    )
    .toFixed(2);
  return (
    <div className="my-3 md:my-10">
      <PageContainer>
        <div className="flex items-center gap-3 text-center justify-between border-b border-black py-3">
          <div className="w-1/5">Məhsul</div>
          <div className="w-1/5">Məhsul Adı</div>
          <div className="w-1/5">Məhsul Miqdarı</div>
          <div className="w-1/5">Məhsul Qiyməti</div>
          <div className="w-1/5"></div>
        </div>
        <div>
          {cartPrdcts &&
            cartPrdcts.map((item) => {
              return (
                <div
                  className="my-5 flex justify-between items-center text-center"
                  key={item.id}
                >
                  <div className="w-1/5 flex justify-center items-center">
                    <Image src={item.image} alt="" width={40} height={40} />
                  </div>
                  <div className="w-1/5">{item.name}</div>
                  <div className="w-1/5 flex justify-center">
                    <Counter
                      cardProduct={item}
                      increaseFunc={() => {
                        addToBasketIncrease(item);
                      }}
                      decreaseFunc={() => {
                        addToBasketDecrease(item);
                      }}
                    />
                  </div>
                  <div className="w-1/5 text-orange-600 text-lg">
                    {item.price} ₼
                  </div>
                  <div className="w-1/5">
                    <Button
                      small
                      font
                      text="Məhsulu sil"
                      color
                      onClick={() => removeFromCart(item)}
                    />
                  </div>
                </div>
              );
            })}
        </div>
        <div className="flex items-center justify-between border-t py-3 border-black ">
          <button
            onClick={() => removeCart()}
            className="underline w-1/5 text-md"
          >
            Səbəti təmizlə
          </button>
          <div className="font-bold text-orange-600 text-xl">
            {cartPrdctsTotal > 0 ? cartPrdctsTotal : 0} ₼
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default CartClient;
