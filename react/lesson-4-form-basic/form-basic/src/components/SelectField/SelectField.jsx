import { useId } from "react";

import styles from "./SelectField.module.css";

const SelectField = ({ label, handleChange, options, ...props }) => {
  const id = useId();
  const elements = options.map(({ value, text }) => (
    <option key={value} value={value}>
      {text}
    </option>
  ));

  return (
    <div className={styles.group}>
      <label htmlFor={id}>{label}</label>
      <select onChange={handleChange} {...props} id={id}>
        {elements}
      </select>
    </div>
  );
};

export default SelectField;
