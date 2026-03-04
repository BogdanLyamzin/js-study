import { useState, useEffect, createContext } from "react";

import { getPostsApi } from "../shared/api/posts-api";

export const postsContext = createContext([]);

const PostsProvider = ({children})=> {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchPosts = async()=> {
            try {
                setLoading(true);
                const data = await getPostsApi();
                setPosts(data);
            }
            catch(error) {
                setError(error.response?.data?.message || error.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchPosts();
    }, []);

    return (
        <postsContext.Provider value={{posts, loading, error}}>
            {children}
        </postsContext.Provider>
    )
}

export default PostsProvider;