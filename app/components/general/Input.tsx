"use client";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps = {
  id: string;
  type: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  errors?: FieldErrors | undefined;
  register: UseFormRegister<FieldValues>;
};

const Input: React.FC<InputProps> = ({
  id,
  type,
  placeholder,
  disabled,
  required,
  errors,
  register,
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        className={`w-full h-12 p-3 rounded-md outline-none my-2  ${
          errors && errors[id]
            ? "border-red-500 border"
            : "border border-slate-300"
        }`}
        {...register(id, { required })}
      />
    </div>
  );
};
export default Input;
