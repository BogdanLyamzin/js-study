import "../ShoppingForm.css";
import { nanoid } from "nanoid";
import { useId } from "react";
import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
type TextFieldProps = {
  label: string;
  name: string;
  register: any;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
};
const TextField = ({
  label,
  name,
  register,
  type = "text",
  placeholder,
}: TextFieldProps) => {
  const inputId = useId();
  return (
    <>
      <label className="block" htmlFor={inputId}>
        <span className="text-sm font-medium text-neutral-200">{label}</span>

        <input
          id={inputId}
          type={type}
          {...register(name)}
          className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
          placeholder={placeholder}
        />
      </label>
    </>
  );
};
export default TextField;
