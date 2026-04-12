import { useSelector, useDispatch } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBooksList from "./MyBooksList/MyBooksList";

import { addBook } from "../../redux/actionCreator";

const MyBooks = () => {
  const books = useSelector((store) => store.books);
  const dispatch = useDispatch();

  const onAddBook = data => {
    console.log(data);
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
