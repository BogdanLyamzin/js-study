import { useId } from "react";
type SelectFieldProps = {
  label: string;
  name: string;
  register: any;
  options: { value: string; text: string }[];
};
const SelectField = ({ label, name, register, options = [] }: SelectFieldProps) => {
    const inputId = useId();
  return (
    <>
      <label className="text-sm font-medium text-neutral-200 ml-2" htmlFor={inputId}>
        {label}:
        <select
          id={inputId}
          {...register(name)}
          className="ml-2 rounded-lg border border-neutral-700 bg-neutral-950 px-3 py-2 text-neutral-100 outline-none transition focus:border-lime-400 focus:ring-2 focus:ring-lime-400/20"
        >
            {options.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
          
        </select>
      </label>
    </>
  );
};

export default SelectField;
