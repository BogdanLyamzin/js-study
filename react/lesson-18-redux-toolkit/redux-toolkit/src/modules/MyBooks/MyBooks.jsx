import { useSelector, useDispatch } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBooksList from "./MyBooksList/MyBooksList";

import { addBook } from "../../redux/books/booksActionCreators";
import { selectBooks } from "../../redux/books/booksSelectors";

const MyBooks = () => {
  const books = useSelector(selectBooks);
  const dispatch = useDispatch();

  const onAddBook = data => {
    dispatch(addBook(data));
  };

  return (
    <div>
      <MyBooksForm submitForm={onAddBook} />
      <MyBooksList items={books} />
    </div>
  );
};

export default MyBooks;
