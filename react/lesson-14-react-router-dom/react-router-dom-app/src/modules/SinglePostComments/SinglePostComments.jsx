import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { getPostCommentsByIdApi } from "../../shared/api/posts-api";

const SinglePostComments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        setLoading(true);
        const data = await getPostCommentsByIdApi(id);
        setComments(data);
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [id]);

  const elements = comments.map(({id, name, email, body})=> (
    <li>
        <p>Name: {name}. Email: {email}.</p>
        <p>{body}</p>
    </li>
  ))

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>{elements}</ul>
    </div>
  );
};

export default SinglePostComments;
