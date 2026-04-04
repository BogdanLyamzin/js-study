import {useState, useEffect} from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

import PostItem from "./PostItem";

import {getPostsApi} from "../../shared/api/posts-api";

import styles from "./Posts.module.css";

const limit = 9;

const InfinityScrollPosts = () => {
  const {data, isLoading, isFetching, error, fetchNextPage, hasNextPage} = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({pageParam})=> {
      return getPostsApi({limit, page: pageParam});
    },
    // cacheTime: 1000,
    // staleTime: 1000 * 5,
    staleTime: 60_000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages)=> {
      if(allPages.length > 11) return undefined;

      return allPages.length + 1;
    }
  });

  // const [searchParams, setSearchParams] = useSearchParams();
  // const page = Number(searchParams.get("page")) || 1;

  // const loadMore = ()=> {
  //   setSearchParams(prev => {
  //     const params = new URLSearchParams(prev);
  //     params.set("page", page + 1);
  //     return params;
  //   });
  // };

  if(isLoading) {
    return <p>Loading...</p>;
  }

  const elements = data?.pages.flat().map(({ id, title, body }) => (
    <PostItem key={id} id={id} title={title} body={body} />
  ));

  return (
    <>
      <ul className={styles.list}>{elements}</ul>
      {hasNextPage && <div className={styles.loadMoreWrapper}>
        <button onClick={fetchNextPage} className={styles.loadMoreButton}>
          Load more
        </button>
      </div>}
      
      {isFetching && <p>Load next...</p>}
      {error && <p className={styles.error}>{error}</p>}
    </>
  );
};

export default InfinityScrollPosts;
