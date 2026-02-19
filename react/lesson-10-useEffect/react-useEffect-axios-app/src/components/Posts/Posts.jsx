import { useState } from "react";

import styles from "./Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const elements = posts.map((item) => (
    <li key={item.id} className={styles.item}>
      {item.title}
    </li>
  ));

  return (
    <div>
      <ol>{elements}</ol>
    </div>
  );
};

export default Posts;
