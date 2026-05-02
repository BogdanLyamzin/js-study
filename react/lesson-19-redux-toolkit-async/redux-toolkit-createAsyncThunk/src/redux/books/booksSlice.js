import { createSlice } from "@reduxjs/toolkit";

import { fetchBooks, addBook, deleteBook } from "./booksOperations";

const initialState = {
  loading: false,
  items: [],
  error: null,
};

const loadingReducer = (store) => {
  store.loading = true;
  store.error = null;
};

const errorReducer = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};

const booksSlice = createSlice({
  initialState,
  name: "books",
 extraReducers: builder => {
    builder
      .addCase(fetchBooks.pending, loadingReducer)
      .addCase(fetchBooks.fulfilled, (store, {payload})=> {
        store.loading = false;
        store.items = payload;
      })
      .addCase(fetchBooks.rejected, errorReducer)
      .addCase(addBook.pending, loadingReducer)
      .addCase(addBook.fulfilled, (store, {payload})=> {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(addBook.rejected, errorReducer)
      .addCase(deleteBook.pending, loadingReducer)
      .addCase(deleteBook.fulfilled, (store, {payload})=> {
        store.loading = false;
        store.items = store.items.filter(item => item.id !== payload);
      })
      .addCase(deleteBook.rejected, errorReducer)

 }
});

export default booksSlice.reducer;
