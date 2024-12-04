import { IconType } from "react-icons";

type ButtonProps = {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  icon?: IconType;
  disabled?: boolean;
  color?: boolean;
  font?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  outline,
  small,
  disabled,
  icon: Icon,
  color,
  font
}) => {
  return (
    <button
      disabled={disabled}
      className={`flex items-center justify-center my-1 gap-2 rounded-lg p-3 ${font && "font-semibold"} ${color ? "bg-red-700" : ""} ${
        small ? "w-[250px]" : "w-full"
      } ${outline ? "border text-black" : "bg-black text-white"}`}
      onClick={onClick}
    >
      {Icon && <Icon />}
      {text}
    </button>
  );
};

export default Button;
