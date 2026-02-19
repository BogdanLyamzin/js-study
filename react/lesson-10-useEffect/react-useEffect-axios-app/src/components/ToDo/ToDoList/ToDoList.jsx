import styles from "./ToDoList.module.css";

const ToDoList = ({ items = [], deleteToDo }) => {
  const elements = items.map(({ name, urgency }, index) => {
    const fullClassName = urgency
      ? `${styles.name} ${styles.urgency}`
      : styles.name;

    return (
      <li key={name}>
        <span className={fullClassName}>{name}</span>.
        <button onClick={() => deleteToDo(index)}>Delete</button>
      </li>
    );
  });

  return <ol>{elements}</ol>;
};

export default ToDoList;
