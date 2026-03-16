import {useState, useEffect, useCallback} from "react";
import { useSearchParams } from "react-router-dom";

import PostItem from "./PostItem";

import {getPostsApi} from "../../shared/api/posts-api";

import styles from "./Posts.module.css";

const limit = 9;

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [page, setPage] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  useEffect(()=> {
      const fetchPosts = async()=> {
          try {
              setLoading(true);
              const data = await getPostsApi({limit, page});
              setPosts(prevData => [...prevData, ...data]);
          }
          catch(error) {
              setError(error.response?.data?.message || error.message);
          }
          finally {
              setLoading(false);
          }
      }
      fetchPosts();
  }, [page]);

  const loadMore = ()=> {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set("page", page + 1);
      return params;
    });
  };


  const elements = posts.map(({ id, title, body }) => (
    <PostItem key={id} id={id} title={title} body={body} />
  ));

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
