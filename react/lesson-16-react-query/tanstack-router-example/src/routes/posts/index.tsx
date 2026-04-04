import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";

import Loading from "#/components/Loading";
import Error from "#/components/Error";

import { getPosts } from "../../shared/api/posts-api";

import type { Post } from "#/shared/types";

export const LoadingWrapper = () => {
  return <Loading message="Loading posts..." />;
};

export const Route = createFileRoute("/posts/")({
  component: Posts,
  validateSearch: (search) => {
    return {
      page: Number(search.page || 1),
    };
  },
  loaderDeps: ({search}) => {
    const {page} = search;
    return {
      page,
    }
  },
  loader: async ({context, deps}) => {
    const {page} = deps;
    const {queryClient} = context;
    return queryClient.ensureQueryData({
      queryKey: ["posts", page],
      queryFn: ()=> getPosts({page}),
    });
  },
  pendingComponent: LoadingWrapper,
  errorComponent: () => <Error message="Error loading posts" />,
});

function Posts() {
  const posts: Post[] = Route.useLoaderData();
  // const search = Route.useSearch();
  const navigate = useNavigate();
  const loadMore = () => {
    navigate({
      search: (prev) => ({
        ...prev,
        page: prev.page + 1,
      }),
    });
  };

  const elements = posts.map(({ id, title, body }) => (
    <article
      key={id}
      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
    >
      <Link to="/posts/$postId" params={{ postId: String(id) }}>
        <h2 className="mb-2 text-2xl font-semibold text-gray-900">{title}</h2>
      </Link>

      <p className="text-gray-600 leading-7">{body}</p>
    </article>
  ));

  return (
    <>
      <ul className="mx-auto max-w-3xl space-y-6">{elements}</ul>
      <button onClick={loadMore} className="cursor-pointer">Load more</button>
    </>
  );
}
