import { useId } from "react";

import styles from "./TextField.module.css";

const TextField = ({ label, ...props }) => {
  const id = useId();

  return (
    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} />
    </div>
  );
};

export default TextField;
