import { createFileRoute, notFound } from "@tanstack/react-router";

import { getPostByIdComments } from "#/shared/api/posts-api";

export const Route = createFileRoute("/posts/$postId/comments")({
  component: PostCOmmentsComponent,
  loader: async ({ params }) => {
    try {
      const data = await getPostByIdComments(params.postId);
      return data;
    } catch (error) {
      if (error.status === 404) {
        throw notFound();
      }
      throw error;
    }
  },
  notFoundComponent: NotFoundPostComments,
});

function NotFoundPostComments() {
  const { postId } = Route.useParams();

  return <p className="font-bold">Post {postId} comments not found</p>;
}

function PostCOmmentsComponent() {
  const comments = Route.useLoaderData();
  const elements = comments.map(({ id, name, email, body }) => (
    <li key={id}>
      <p>
        {name} {email}
      </p>
      <p>{body}</p>
    </li>
  ));
  return <ul>{elements}!</ul>;
}
