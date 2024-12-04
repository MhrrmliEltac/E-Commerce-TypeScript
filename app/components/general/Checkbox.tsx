import { FieldValues, UseFormRegister } from "react-hook-form";

interface CheckboxProps {
  id: string;
  label: string;
  register: UseFormRegister<FieldValues>;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, label, register }) => {
  return (
    <div className="flex items-center gap-2 text-slate-500 text-sm my-2">
      <input id={id} type="checkbox" {...register(id)} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default Checkbox;
