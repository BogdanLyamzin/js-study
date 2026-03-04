import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const getPostsApi = async()=> {
    const {data} = await postsInstance.get("/");
    return data;
}