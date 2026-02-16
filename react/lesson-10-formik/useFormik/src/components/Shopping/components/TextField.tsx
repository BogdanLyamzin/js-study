import "../ShoppingForm.css";
import { nanoid } from "nanoid";

import { useId } from "react";
import type { ChangeEventHandler, HTMLInputTypeAttribute } from "react";
import axios from "axios";

type TextFieldProps = {
  label: string;
  name: string;
  register: any;
  validation: any;
  error: any;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
};
const TextField = ({
 label, formik, ...props
}: TextFieldProps) => {
  const {type, placeholder, name} = props;

  const inputId = useId();
  const value = formik.values[name];
  const error = formik.errors[name];
  return (
    <>
      <label className="block" htmlFor={inputId}>
        <span className="text-sm font-medium text-neutral-200">{label}</span>
      
        <input
        name={name}
        value={value}
          id={inputId}
          type={type}
          onChange={formik.handleChange}
          className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
          placeholder={placeholder}
        />
        {error && <p style={{color: "red"}}>{error}</p>}
      </label>
    </>
  );
};
export default TextField;
