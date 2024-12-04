import { IconType } from "react-icons";

type ChoicesİnputProps = {
  text: string;
  onClick: (value: string) => void;
  selected?: boolean;
  icon: IconType;
};

const Choicesİnput: React.FC<ChoicesİnputProps> = ({
  text,
  onClick,
  selected,
  icon: Icon,
}) => {
  return (
    <div
      onClick={() => onClick(text)}
      className={`px-4 cursor-pointer py-2 rounded-md flex items-center justify-center font-bold gap-2 h-16 border ${
        selected ? "border-black" : "border-gray-200"
      }`}
    >
      <Icon />
      <span className="text-slate-700 text-lg">{text}</span>
    </div>
  );
};

export default Choicesİnput;
