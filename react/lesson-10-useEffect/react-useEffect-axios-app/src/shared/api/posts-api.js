import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
})

export const getPostsApi = async(params = {})=> {
    const {_limit = 10, _page = 1} = params;
    // const {data} = await postsInstance.get(`?_limit=${_limit}&_page=${_page}`);
    const {data} = await postsInstance.get("/", {
        params: {
            _limit,
            _page,
        }
    });
    return data;
}