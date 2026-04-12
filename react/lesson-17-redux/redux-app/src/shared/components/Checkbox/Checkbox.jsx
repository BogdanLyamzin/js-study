import { useId } from "react";

import FormError from "../FormError/FormError";

import styles from "./Checkbox.module.css";

const Checkbox = ({ label, register, name, error, ...props }) => {
  const id = useId();

  return (
    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" {...register(name)} {...props} id={id} />
      <FormError error={error} />
    </div>
  );
};

export default Checkbox;
