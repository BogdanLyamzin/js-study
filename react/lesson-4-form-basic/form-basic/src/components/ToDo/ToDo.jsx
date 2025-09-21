import { useState } from "react";
import { nanoid } from "nanoid";

// import ToDoForm from "./ToDoForm/ToDoForm";
import ToDoFormRefactor from "./ToDoFormRefactor/ToDoFormRefactor";
import ToDoList from "../ToDoList/ToDoList";

const ToDo = () => {
  const [items, setItems] = useState([]);

  const addItem = (data) => {
    setItems((prevItems) => {
      const newItem = {
        id: nanoid(),
        ...data,
      };
      return [...prevItems, newItem];
    });
  };

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <ToDoFormRefactor onSubmit={addItem} />
      <ToDoList items={items} deleteItem={deleteItem} />
    </div>
  );
};

export default ToDo;
