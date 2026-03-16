import { useContext } from "react";

import { postsContext } from "../../context/PostsProvider";

const usePosts = ()=> {
    const context = useContext(postsContext);

    return context;
}

export default usePosts;