import { CardProductProps } from "../detail/DetailClient";

interface ProductCard {
  cardProduct: CardProductProps;
  increaseFunc: () => void;
  decreaseFunc: () => void;
}

const Counter: React.FC<ProductCard> = ({
  cardProduct,
  increaseFunc,
  decreaseFunc,
}) => {
  const buttonStyle =
    "w-8 h-8 flex border rounded-md text-lg justify-center items-center";

  return (
    <div className="flex gap-2 items-center">
      <button className={buttonStyle} onClick={decreaseFunc}>
        -
      </button>
      <div className="text-lg md:text-xl">{cardProduct.quantity}</div>
      <button className={buttonStyle} onClick={increaseFunc}>
        +
      </button>
    </div>
  );
};

export default Counter;
