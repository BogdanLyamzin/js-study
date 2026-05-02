import axios from "axios";

const booksInstance = axios.create({
    baseURL: "https://67e3b7b52ae442db76d13e6a.mockapi.io/api/books"
});

export const getBooks = async()=> {
    const {data} = await booksInstance.get("/");
    return data;
}

export const addBook = async(payload)=> {
    const {data} = await booksInstance.post("/", payload);
    return data;
}

export const deleteBook = async id => {
    const {data} = await booksInstance.delete(`/${id}`);
    return data;
}