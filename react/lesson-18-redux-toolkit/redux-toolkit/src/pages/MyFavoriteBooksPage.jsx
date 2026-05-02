import { useSelector } from "react-redux";

import MyBooksList from "../modules/MyBooks/MyBooksList/MyBooksList";

import { selectFavoriteBooks } from "../redux/books/booksSelectors";

const MyFavoriteBooksPage = ()=> {
    const books = useSelector(selectFavoriteBooks);

    return (
        <div>
            <h1>My favorite books page</h1>
            <MyBooksList items={books} />
        </div>
    )
}

export default MyFavoriteBooksPage;