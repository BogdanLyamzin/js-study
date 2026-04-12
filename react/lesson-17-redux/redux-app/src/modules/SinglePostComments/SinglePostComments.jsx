import { Suspense } from "react";
import { useLoaderData, Await, useAsyncError } from "react-router-dom";

import { getPostCommentsByIdApi } from "../../shared/api/posts-api";

export const loader = async ({ params }) => {
  const { id } = params;
  return {
    comments: getPostCommentsByIdApi(id),
  };
};

const CommentsList = ({ comments }) => {
  const elements = comments.map(({ name, email, body }) => (
    <li>
      <p>
        Name: {name}. Email: {email}.
      </p>
      <p>{body}</p>
    </li>
  ));

  return (
    <ul>
      {elements}
    </ul>
  );
};

const ErrorRenderComments = () => {
  const error = useAsyncError();
  return <p style={{ color: "red" }}>{error.message}</p>;
};

 const Component = () => {
  const { comments } = useLoaderData();

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={comments} errorElement={<ErrorRenderComments />}>
          {(data) => <CommentsList comments={data} />}
        </Await>
      </Suspense>
    </div>
  );
};

export default Component;
