import "../ShoppingForm.css";
import { nanoid } from "nanoid";
import { useField } from "formik";
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
 label, ...props
}: TextFieldProps) => {
  const {type, placeholder, name} = props;
  const [field, meta] = useField({name});
  const inputId = useId();
  return (
    <>
      <label className="block" htmlFor={inputId}>
        <span className="text-sm font-medium text-neutral-200">{label}</span>
        {/* <input
          id={inputId}
          type={type}
          {...register(name, {
            validate: async value => {
              try {
                await axios.post("http://localhost:3000/api/shopping/name", {
                  name: value
                });
                return true;
              }
              catch(errror) {
                return 'Name must be unique'
              }
            }
          })}
          className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
          placeholder={placeholder}
        /> */}
        <input
          id={inputId}
          type={type}
          {...field}
          className="mt-2 w-full rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 placeholder:text-neutral-500 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
          placeholder={placeholder}
        />
        {meta.error && <p style={{color: "red"}}>{meta.error}</p>}
      </label>
    </>
  );
};
export default TextField;
