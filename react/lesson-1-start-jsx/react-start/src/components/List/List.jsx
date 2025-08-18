import ListItem from "./ListItem/ListItem";

import styles from "./List.module.css";

const List = ({ items = [] }) => {
  const elements = items.map(({ id, ...props }) => <ListItem key={id} {...props} />);

  return <ol className={styles.list}>{elements}</ol>
};

export default List;
