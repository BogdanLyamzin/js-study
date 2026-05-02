import { createAsyncThunk } from "@reduxjs/toolkit";

import * as booksApi from "../../shared/api/books-api";

export const fetchBooks = createAsyncThunk(
  "books/fetch",
  async(_, thunkAPI)=> {
    try {
      const books = await booksApi.getBooks();
      return books;
    }
    catch(error) {
      return thunkAPI.rejectWithValue(error?.response?.data || error.message);
    }
  }
)

// export const fetchBooks = () => {
//   const operation = async (dispatch) => {
//     try {
//       dispatch(fetchBooksLoading());
//       const books = await booksApi.getBooks();
//       dispatch(fetchBooksSuccess(books));
//     } catch (error) {
//       dispatch(fetchBooksError(error?.response?.data || error.message));
//     }
//   };

//   return operation;
// };

export const addBook = createAsyncThunk(
  "books/add",
  async(data, {rejectWithValue})=> {
    try {
      const newBook = await booksApi.addBook(data);
      return newBook;
    }
    catch(error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  },
  {
    condition: ({name, author}, {getState})=> {
      const {books} = getState();
      const normalizedName = name.toLowerCase();
      const normalizedAuthor = author.toLowerCase();
      const dublicate = books.items.some(item => {
        return (normalizedName === item.name.toLowerCase() && normalizedAuthor === item.author.toLowerCase());
      });
      if(dublicate) {
        alert(`${name} ${author} already exist`);
        return false;
      }
    }
  }
)

// export const addBook = (data) => {
//   const operation = async (dispatch) => {
//     try {
//       dispatch(addBooksLoading());
//       const newBook = await booksApi.addBook(data);
//       dispatch(addBookSuccess(newBook));
//     } catch (error) {
//       dispatch(addBookError(error?.response?.data || error.message));
//     }
//   };

//   return operation;
// };

export const deleteBook = createAsyncThunk(
  "books/delete",
  async(id, {rejectWithValue})=> {
    try {
      await booksApi.addBook(id);
      return id;
    }
    catch(error) {
      return rejectWithValue(error?.response?.data || error.message);
    }
  }
)

// export const deleteBook = (id) => {
//   const operation = async (dispatch) => {
//     try {
//       dispatch(deleteBooksLoading());
//       await booksApi.deleteBook(id);
//       dispatch(deleteBookSuccess(id));
//     } catch (error) {
//       dispatch(deleteBookError(error?.response?.data || error.message));
//     }
//   };

//   return operation;
// };
