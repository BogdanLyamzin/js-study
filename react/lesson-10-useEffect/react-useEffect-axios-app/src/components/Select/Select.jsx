import { useId } from "react";

import styles from "./Select.module.css";

const Select = ({ label, options, ...props }) => {
  const id = useId();

  const elements = options.map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  return (
    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <select {...props} id={id}>
        {elements}
      </select>
    </div>
  );
};

export default Select;
