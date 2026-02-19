import { useState } from "react";

import AddToDoForm from "./AddToDoForm/AddToDoForm";
import ToDoList from "./ToDoList/ToDoList";

import styles from "./ToDo.module.css";

const ToDo = () => {
  const [toDo, setToDo] = useState([]);

  const addToDo = (newToDo) => {
    setToDo((prevToDo) => [...prevToDo, newToDo]);
  };

  const deleteToDo = (index) => {
    setToDo((prevToDo) =>
      prevToDo.filter((_, idx) => idx !== index)
    );
  };

  return (
    <div className={styles.wrapper}>
      <AddToDoForm submitForm={addToDo} />
      <ToDoList items={toDo} deleteToDo={deleteToDo} />
    </div>
  );
};

export default ToDo;
