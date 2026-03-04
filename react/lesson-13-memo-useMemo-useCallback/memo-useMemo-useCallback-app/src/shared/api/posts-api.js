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