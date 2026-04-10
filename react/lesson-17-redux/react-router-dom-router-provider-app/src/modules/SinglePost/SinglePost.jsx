import { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";

import { getPostByIdApi } from "../../shared/api/posts-api";

import styles from "./SinglePost.module.css";

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const data = await getPostByIdApi(id);
        setPost(data);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, [id]);

  const goBack = ()=> navigate(-1);

  return (
    <div>
        {window.history.length > 2 && <button onClick={goBack}>Go back</button>}
      {post && (
        <>
          <h2 className={styles.title}>{post.title}</h2>
          <p>{post.body}</p>
          <Link to="comments">Comments</Link>
          <Outlet />
        </>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default SinglePost;
