import { useState, useCallback } from "react";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

import MyBooksForm from "./MyBooksForm/MyBooksForm";
import MyBooksList from "./MyBooksList/MyBooksList";

const MyBooks = () => {
    const books = useSelector(store => store.books);
    console.log(books);

    // const addBook = useCallback(payload => {
    //     setBooks(prevBooks => [...prevBooks, {...payload, id: nanoid()}]);
    // }, []);

    // const deleteBook = useCallback(id => {
    //     setBooks(prevBooks => prevBooks.filter(book => book.id !== id));
    // }, []);

  return (
    <div>
      {/* <MyBooksForm submitForm={addBook} />
      <MyBooksList onDeleteBook={deleteBook} items={books} /> */}
    </div>
  );
};

export default MyBooks;
