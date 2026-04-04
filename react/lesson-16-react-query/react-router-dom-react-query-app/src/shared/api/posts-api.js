import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const getPostsApi = async(params = {})=> {
    const {limit = 9, page = 1} = params;
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
    return data;
}