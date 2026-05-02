import { useDispatch } from "react-redux";

import { deleteBook } from "../../../redux/books/booksActionCreators";

const MyBooksList = ({ items = [] }) => {
  const dispatch = useDispatch();

  const onDeleteBook = id => dispatch(deleteBook(id));

  const elements = items.map(({ id, name, author, favorite }) => (
    <li style={{ fontWeight: favorite ? "bold" : "normal" }} key={id}>
      Name: {name}. Author: {author}
      <button type="button" onClick={()=> onDeleteBook(id)}>Delete book</button>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MyBooksList;
