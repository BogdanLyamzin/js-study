import usePosts from "../../shared/hooks/usePosts";
import styles from "./Posts.module.css";

const Posts = () => {
  const {posts, loading, error} = usePosts();
  
  return <div></div>;
};

export default Posts;
