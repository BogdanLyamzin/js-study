import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import PageTitle from "../../shared/components/PageTitle/PageTitle";

import PostItem from "./PostItem";

import {getPostsApi} from "../../shared/api/posts-api";

import styles from "./Posts.module.css";

const limit = 9;

const PostsWithPagination = () => {
    const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;

  const {data, isLoading, isFetching, error, fetchNextPage, hasNextPage} = useQuery({
    queryKey: ["posts", page],
    queryFn: ()=>getPostsApi({limit, page}),
    // cacheTime: 1000,
    // staleTime: 1000 * 5,
    staleTime: 60_000,
    placeholderData: keepPreviousData,
  });

  const prevPage = ()=> {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set("page", page - 1);
      return params;
    });
  };

  const nextPage = ()=> {
    setSearchParams(prev => {
      const params = new URLSearchParams(prev);
      params.set("page", page + 1);
      return params;
    });
  };

  if(isLoading) {
    return <p>Loading...</p>;
  }

  const elements = data?.map(({ id, title, body }) => (
    <PostItem key={id} id={id} title={title} body={body} />
  ));

  return (
    <>
      <PageTitle>Posts {page} page</PageTitle>
      <ul className={styles.list}>{elements}</ul>
      <div className={styles.loadMoreWrapper}>
        <button onClick={prevPage} disabled={page == 1} className={styles.loadMoreButton}>
          Prev page
        </button>
        <p>Current page {page}</p>
        <button onClick={nextPage} disabled={page == 12} className={styles.loadMoreButton}>
          Next page
        </button>
      </div>
      
      {isFetching && <p>Load next...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default PostsWithPagination;
