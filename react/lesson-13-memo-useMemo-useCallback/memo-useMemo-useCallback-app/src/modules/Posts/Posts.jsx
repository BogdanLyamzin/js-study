import PostItem from "./PostItem";

import usePosts from "../../shared/hooks/usePosts";
import styles from "./Posts.module.css";

const Posts = () => {
  const { posts, loading, error, loadMore } = usePosts();
  console.log(posts)
  const elements = posts.map(({ id, title, body }) => (
    <PostItem key={id} id={id} title={title} body={body} />
  ));

  console.log("render posts");
  return (
    <>
      <ul className={styles.list}>{elements}</ul>
      <div className={styles.loadMoreWrapper}>
        <button onClick={loadMore} className={styles.loadMoreButton}>
          Load more
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default Posts;
