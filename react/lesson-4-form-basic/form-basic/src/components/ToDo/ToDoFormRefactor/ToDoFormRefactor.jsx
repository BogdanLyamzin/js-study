import { useState } from "react";

import TextField from "../../TextField/TextField";
import CheckboxField from "../../CheckboxField/CheckboxField";
import SelectField from "../../SelectField/SelectField";

import { initialState, fields } from "./formSettings";

import styles from "./ToDoFormRefactor.module.css";

const ToDoFormRefactor = ({ onSubmit }) => {
  const [values, setValues] = useState({ ...initialState });

  const handleChange = (e) => {
    setValues((prevValues) => {
      const { name, value, type, checked } = e.target;
      const newValue = type !== "checkbox" ? value : checked;
      return {
        ...prevValues,
        [name]: newValue,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
    setValues({ ...initialState });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField
        handleChange={handleChange}
        value={values.title}
        {...fields.title}
      />
      <CheckboxField
        handleChange={handleChange}
        checked={values.urgency}
        {...fields.urgency}
      />
      <SelectField label="Type:" handleChange={handleChange} value={values.type} {...fields.type} />
      <button type="submit">Add to do</button>
    </form>
  );
};

export default ToDoFormRefactor;
