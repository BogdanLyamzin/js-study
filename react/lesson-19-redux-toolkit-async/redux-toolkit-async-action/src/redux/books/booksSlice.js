import { createSlice } from "@reduxjs/toolkit";

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
  reducers: {
    fetchBooksLoading: loadingReducer,
    fetchBooksSuccess: (store, { payload }) => {
      store.loading = false;
      store.items = payload;
    },
    fetchBooksError: errorReducer,
    addBooksLoading: loadingReducer,
    addBookSuccess: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    addBookError: errorReducer,
    deleteBooksLoading: loadingReducer,
    deleteBookSuccess: (store, { payload }) => {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    deleteBookError: errorReducer,
  },
});

export const {
  fetchBooksLoading,
  fetchBooksSuccess,
  fetchBooksError,
  addBooksLoading,
  addBookSuccess,
  addBookError,
  deleteBooksLoading,
  deleteBookSuccess,
  deleteBookError,
} = booksSlice.actions;

export default booksSlice.reducer;
