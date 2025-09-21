import { useId } from "react";

import styles from "./TextField.module.css";

const TextField = ({ label, type = "text", handleChange, ...props }) => {
  const id = useId();

  return (
    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <input onChange={handleChange} type={type} id={id} {...props} />
    </div>
  );
};

export default TextField;
