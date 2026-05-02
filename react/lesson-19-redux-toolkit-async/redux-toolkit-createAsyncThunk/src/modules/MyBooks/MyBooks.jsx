import { useSelector, useDispatch } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBooksList from "./MyBooksList/MyBooksList";

import { addBook } from "../../redux/books/booksOperations";
import { selectBooks } from "../../redux/books/booksSelectors";

const MyBooks = () => {
  const {items, loading, error} = useSelector(selectBooks);
  const dispatch = useDispatch();

  const onAddBook = data => {
    dispatch(addBook(data));
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{color: "red"}}>{error}</p>}
      <MyBooksForm submitForm={onAddBook} />
      <MyBooksList items={items} />
    </div>
  );
};

export default MyBooks;
