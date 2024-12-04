"use client";
import { CardProductProps } from "@/app/components/detail/DetailClient";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

interface cartContextProps {
  productCartQty: number;
  cartPrdcts: CardProductProps[] | null;
  addToBasket: (product: CardProductProps) => void;
  addToBasketIncrease: (product: CardProductProps) => void;
  addToBasketDecrease: (product: CardProductProps) => void;
  removeFromCart: (product: CardProductProps) => void;
  removeCart: () => void;
}

const cartContext = createContext<cartContextProps | null>(null);

interface Props {
  [propName: string]: any;
}

export const CartContextProvider = (props: Props) => {
  const [productCartQty, setProductCartQty] = useState(0);
  const [cartPrdcts, setCartPrdcts] = useState<CardProductProps[] | null>(null);

  useEffect(() => {
    let getItem: any = localStorage.getItem("cart");
    let getItemParse: CardProductProps[] | null = JSON.parse(getItem);
    setCartPrdcts(getItemParse);
  }, []);

  const addToBasket = useCallback(
    (product: CardProductProps) => {
      setCartPrdcts((prev) => {
        let updatedCart;
        if (prev) {
          updatedCart = [...prev, product];
          toast.success("Məhsul Səbətə Əlavə olundu");
        } else {
          updatedCart = [product];
          toast.success("Məhsul Səbətə Əlavə olundu");
        }

        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      });
    },
    [cartPrdcts]
  );

  const addToBasketIncrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity === 10) {
        toast.error("Daha artıq əlavə etmək olmur");
        return;
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        let existingItem = updatedCart.findIndex(
          (cart) => cart.id === product.id
        );
        if (existingItem > -1) {
          updatedCart[existingItem].quantity = ++updatedCart[existingItem]
            .quantity;
        }
        setCartPrdcts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );

  const addToBasketDecrease = useCallback(
    (product: CardProductProps) => {
      let updatedCart;
      if (product.quantity === 0) {
        return;
      }
      if (cartPrdcts) {
        updatedCart = [...cartPrdcts];
        let existingItem = updatedCart.findIndex(
          (cart) => cart.id === product.id
        );
        if (existingItem > -1) {
          updatedCart[existingItem].quantity = --updatedCart[existingItem]
            .quantity;
        }
        setCartPrdcts(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }
    },
    [cartPrdcts]
  );

  const removeFromCart = useCallback(
    (product: CardProductProps) => {
      if (cartPrdcts) {
        const filteredProduct = cartPrdcts.filter(
          (cart) => cart.id !== product.id
        );
        setCartPrdcts(filteredProduct);
        toast.success("Məhsul Səbətdən Silindi");
        localStorage.setItem("cart", JSON.stringify(filteredProduct));
      }
    },
    [cartPrdcts]
  );

  const removeCart = useCallback(() => {
    setCartPrdcts(null);
    toast.success("Səbət Təmizləndi");
    localStorage.removeItem("cart");
  }, []);

  let value = {
    cartPrdcts,
    productCartQty,
    addToBasket,
    removeFromCart,
    removeCart,
    addToBasketIncrease,
    addToBasketDecrease,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};

const UseCart = () => {
  const context = useContext(cartContext);
  if (context === null) {
    throw new Error("Xəta baş verdi");
  }
  return context;
};

export default UseCart;
