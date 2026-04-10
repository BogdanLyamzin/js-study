import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useSuspenseQuery, useMutation } from "@tanstack/react-query";

import Loading from "#/components/Loading";
import Error from "#/components/Error";

import { getPosts, addPostApi, deletePostApi } from "../../shared/api/posts-api";

import type { Post } from "#/shared/types";

export const LoadingWrapper = () => {
  return <Loading message="Loading posts..." />;
};

const createPostQueryOptions = (page: number) => ({
    queryKey: ["posts", page],
    queryFn: ()=> getPosts({page}),
});


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
    return queryClient.ensureQueryData(createPostQueryOptions(page));
  },
  pendingComponent: LoadingWrapper,
  errorComponent: () => <Error message="Error loading posts" />,
});

function Posts() {
  const {page} = useSearch({from: "/posts"});
  const {queryClient} = Route.useRouteContext();
  // const posts = Route.useLoaderData();
  const {data: posts} = useSuspenseQuery(createPostQueryOptions(page));
  // const search = Route.useSearch();

  const createPostMutation = useMutation({
    mutationFn: payload => addPostApi(payload),
    onSuccess: async (newPost)=> {
      queryClient.setQueryData(["posts", page], (oldPosts = []) => {
       return [...oldPosts, newPost];
      });
      // await queryClient.invalidateQueries({
      //   queryKey: ["posts", page]
      // });
    },
    onError: error => {
      console.log(error);
    }
  });

  const deletePostMutation = useMutation({
    mutationFn: id => deletePostApi(id),
    onSuccess: ({id = 1}) => {
      queryClient.setQueryData(["posts", page], (oldPosts = []) => {
        return oldPosts.filter(post => post.id !== id)
       });

       queryClient.removeQueries(({
          queryKey: ["post", id],
          exact: true
       }))
    }
  })

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

  const deletePost = ()=> deletePostMutation.mutate(1);

  const addPost = ()=> createPostMutation.mutate({title: "New post", body: "New body"});

  return (
    <>
      <ul className="mx-auto max-w-3xl space-y-6">{elements}</ul>
      <button disabled={deletePostMutation.isPending} onClick={deletePost} className="cursor-pointer">Delete post</button>
      <button disabled={createPostMutation.isPending} onClick={addPost} className="cursor-pointer">Add post</button>
      <button onClick={loadMore} className="cursor-pointer">Load more</button>
    </>
  );
}
