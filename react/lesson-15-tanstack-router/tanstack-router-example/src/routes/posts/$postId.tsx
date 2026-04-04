import { createFileRoute, notFound, useNavigate, Link, Outlet } from '@tanstack/react-router';

import { getPostById } from '#/shared/api/posts-api';

export const Route = createFileRoute('/posts/$postId')({
  component: RouteComponent,
  loader: async ({params})=> {
    try {
      const data = await getPostById(params.postId);
      return data;
    }
    catch(error) {
      if(error.status === 404) {
        throw notFound();
      }
      throw error;
    }
  },
  notFoundComponent: NotFoundPost,
})

function NotFoundPost () {
  const {postId} = Route.useParams();

  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
        Post {postId} not found
       </h1>
      </section>
    </main>
  )
}

function RouteComponent() {
  const {title, body} = Route.useLoaderData();
  const {postId} = Route.useParams();

  const navigate = useNavigate();

  const goBack = ()=> navigate({
    to: -1
  });

  return (
    <main className="page-wrap px-4 py-12">
      <button className='cursor-pointer' onClick={goBack}>Go back</button>
      <section className="island-shell rounded-2xl p-6 sm:p-8">
        
        <h1 className="display-title mb-3 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
        {title}
        </h1>
        <p className="m-0 max-w-3xl text-base leading-8 text-[var(--sea-ink-soft)]">
          {body}
        </p>
        <Link to="/posts/$postId/comments" params={{postId}}>comments</Link>
        <Outlet />
      </section>
    </main>
  )
}
