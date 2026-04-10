import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const getPostsApi = async({limit, page})=> {
    const {data} = await postsInstance.get("/", {
        params: {
            _limit: limit,
            _page: page,
        }
    });
    return data;
}

export const getPostByIdApi = async(id)=> {
    const {data} = await postsInstance.get(`/${id}`);
    return data;
}

export const getPostCommentsByIdApi = async(id)=> {
    const {data} = await postsInstance.get(`/${id}/comments`);
    // throw new Error("cannot load comments");
    return data;
}