import { useState, useId } from "react";
// import { nanoid } from "nanoid";

import { initialState } from "./fields";

import styles from "./ToDoForm.module.css";

const ToDoForm = ({ onSubmit }) => {
  const [values, setValues] = useState({...initialState});

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
    setValues({...initialState});
  };

  const titleId = useId();
  const urgencyId = useId();
  const typeId = useId();

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.group}>
        <label htmlFor={titleId}>Title:</label>
        <input
          value={values.title}
          onChange={handleChange}
          type="text"
          name="title"
          placeholder="Title"
          id={titleId}
        />
      </div>
      <div className={styles.group}>
        <label htmlFor={urgencyId}>Urgency:</label>
        <input
          checked={values.urgency}
          onChange={handleChange}
          type="checkbox"
          name="urgency"
          id={urgencyId}
          className={styles.checkbox}
        />
      </div>
      <div className={styles.group}>
        <label htmlFor={typeId}>Type:</label>
        <select
          value={values.type}
          onChange={handleChange}
          name="type"
          id={typeId}
        >
          <option value="home">Home</option>
          <option value="buy">Buy</option>
          <option value="work">Work</option>
        </select>
      </div>
      <button type="submit">Add to do</button>
    </form>
  );
};

export default ToDoForm;
