import "../ShoppingForm.css";
import { useId } from "react";
import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
type TextFieldProps = {
  label: string;
  name: string;
  register: any;
  type?: HTMLInputTypeAttribute;
  id?: string;
};
const CheckedField = ({ label, name, register, type = "checkbox",}: TextFieldProps) => {
    const inputId = useId()
  return (
    <label className="mt-4 block text-sm font-medium text-neutral-200" htmlFor={inputId}>
      {label}:
      <input
        id={inputId}
        type={type}
        {...register(name)}
        className="text-sm font-medium text-neutral-200"
      />
    </label>
  );
};
export default CheckedField;
