import { memo } from "react";

import styles from "./Posts.module.css";

const PostItem = ({ id, title, body }) => {
    console.log(`Render post ${id}`)
  return (
    <li className={styles.item}>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>
  );
};

export default memo(PostItem);

/*
const memorizedPostItem = (props)=> {
    const prevProps = useRef();
    const prevRender = useRef();
    if(JSON.stringify(prevProps.current) === JSON.stringify(props)) {
        return prevProps.current;
    }
    const prevRender.current = (<li className={styles.item}>
      <h4>{title}</h4>
      <p>{body}</p>
    </li>);
    prevProps.current = props;

    return prevRender.current;
}
*/
