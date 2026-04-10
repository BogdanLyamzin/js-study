import { useId } from "react";

import FormError from "../FormError/FormError";

import styles from "./Select.module.css";

const Select = ({ label, register, name, error, options, ...props }) => {
  const id = useId();

  const elements = options.map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  return (
    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <select {...register(name)} {...props} id={id}>
        {elements}
      </select>
      <FormError error={error} />
    </div>
  );
};

export default Select;
