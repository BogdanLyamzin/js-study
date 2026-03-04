import { useId } from "react";

import FormError from "../FormError/FormError";

import styles from "./TextField.module.css";

const TextField = ({ label, register, name, rules, error, ...props }) => {
  const id = useId();

  return (

    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <input {...register(name, rules)} {...props} id={id} />
      <FormError error={error} />
    </div>
  );
};

export default TextField;
