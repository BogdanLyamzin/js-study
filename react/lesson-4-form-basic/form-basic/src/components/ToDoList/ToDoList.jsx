import styles from "./ToDoList.module.css";

const ToDoList = ({ items = [], deleteItem }) => {

  const elements = items.map(({ id, title, type, urgency }) => {
    const fullClassName = urgency
      ? `${styles.item} ${styles.urgency}`
      : styles.item;
    return (
      <li key={id} className={fullClassName}>
        {type}: {title}. <button onClick={()=> deleteItem(id)}>Delete</button>
      </li>
    );
  });

  return (
    <div>
      <h4 className={styles.title}>To do list</h4>
      <ol>
        {elements}
      </ol>
    </div>
  );
};

export default ToDoList;
