import { useState, useEffect } from "react";

import useMobile from "../../shared/hooks/useMobile";
import usePrevious from "../../shared/hooks/usePrevious";

import { getPostsApi } from "../../shared/api/posts-api";

import styles from "./Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const isMobile = useMobile();
  const prevValue = usePrevious(isMobile);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const limit = isMobile ? 4 : 9;
        const data = await getPostsApi({page, limit});
        setPosts(prevData => [...prevData, ...data]);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [page, isMobile]);

  const loadMore = async()=> {
    setPage(prevPage => prevPage + 1);
  }

  const elements = posts.map((item) => (
    <div key={item.id} className={styles.item}>
      {item.title}
    </div>
  ));

  const listClassName = isMobile
    ? `${styles.list} ${styles.mobile}`
    : styles.list;

  return (
    <>
      <div className={listClassName}>{elements}</div>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {Boolean(posts.length) && <button onClick={loadMore}>Load more</button>}
    </>
  );
};

export default Posts;
