import { useId } from "react";

import styles from "./Checkbox.module.css";

const Checkbox = ({ label, ...props }) => {
  const id = useId();

  return (
    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" {...props} id={id} />
    </div>
  );
};

export default Checkbox;
