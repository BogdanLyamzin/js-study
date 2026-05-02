import {
  fetchBooksLoading,
  fetchBooksSuccess,
  fetchBooksError,
  addBooksLoading,
  addBookSuccess,
  addBookError,
  deleteBooksLoading,
  deleteBookSuccess,
  deleteBookError,
} from "./booksSlice";
import * as booksApi from "../../shared/api/books-api";

export const fetchBooks = () => {
  const operation = async (dispatch) => {
    try {
      dispatch(fetchBooksLoading());
      const books = await booksApi.getBooks();
      dispatch(fetchBooksSuccess(books));
    } catch (error) {
      dispatch(fetchBooksError(error?.response?.data || error.message));
    }
  };

  return operation;
};

export const addBook = (data) => {
  const operation = async (dispatch) => {
    try {
      dispatch(addBooksLoading());
      const newBook = await booksApi.addBook(data);
      dispatch(addBookSuccess(newBook));
    } catch (error) {
      dispatch(addBookError(error?.response?.data || error.message));
    }
  };

  return operation;
};

export const deleteBook = (id) => {
  const operation = async (dispatch) => {
    try {
      dispatch(deleteBooksLoading());
      await booksApi.deleteBook(id);
      dispatch(deleteBookSuccess(id));
    } catch (error) {
      dispatch(deleteBookError(error?.response?.data || error.message));
    }
  };

  return operation;
};
