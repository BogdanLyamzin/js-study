import axios from "axios";

const postsInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts"
});

export const getPosts = async (props = {})=> {
    const {page = 1, limit = 10} = props;
    const {data} = await postsInstance.get("/", {
        params: {
            _page: page,
            _limit: limit
        }
    });
    return data;
}

export const getPostById = async id => {
    const {data} = await postsInstance.get(`/${id}`);
    return data;
}