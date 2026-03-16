import { useState, useEffect, createContext, useCallback } from "react";

import { getPostsApi } from "../shared/api/posts-api";

export const postsContext = createContext([]);

const limit = 9;

const PostsProvider = ({children})=> {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

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

    const loadMore = useCallback(()=> setPage(prevPage => prevPage + 1), []);

    return (
        <postsContext.Provider value={{posts, loading, error, loadMore}}>
            {children}
        </postsContext.Provider>
    )
}

export default PostsProvider;