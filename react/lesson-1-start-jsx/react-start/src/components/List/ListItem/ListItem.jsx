import styles from "./ListItem.module.css";

const ListItem = ({ name, price, count }) => {
  return (
    <li className={styles.item}>
      <p>Product name: {name}</p>
      <p>Product price: {price}</p>
      <p>Product count: {count}</p>
    </li>
  );
};

export default ListItem;
