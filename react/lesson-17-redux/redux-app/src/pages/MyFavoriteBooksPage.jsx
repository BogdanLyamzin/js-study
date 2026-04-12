import { useSelector } from "react-redux";

import MyBooksList from "../modules/MyBooks/MyBooksList/MyBooksList";

const MyFavoriteBooksPage = ()=> {
    const books = useSelector(store => store.books.filter(item => item.favorite));

    return (
        <div>
            <h1>My favorite books page</h1>
            <MyBooksList items={books} />
        </div>
    )
}

export default MyFavoriteBooksPage;