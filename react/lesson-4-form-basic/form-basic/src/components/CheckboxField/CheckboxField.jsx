import { useId } from "react";

import styles from "./CheckboxField.module.css";

const CheckboxField = ({label, handleChange, ...props})=> {
    const id = useId();
    return (
        <div className={styles.group}>
        <label htmlFor={id}>{label}</label>
        <input
          onChange={handleChange}
          type="checkbox"
            {...props}
          id={id}
          className={styles.checkbox}
        />
      </div>
    )
}

export default CheckboxField;