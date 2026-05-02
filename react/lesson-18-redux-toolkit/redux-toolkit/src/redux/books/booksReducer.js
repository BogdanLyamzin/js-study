import { createReducer } from "@reduxjs/toolkit";

import { addBook, deleteBook } from "./booksActionCreators";

const booksReducer = createReducer([], builder => {
  builder
    .addCase(deleteBook, (store, {payload})=> store.filter(item => item.id !== payload))
    // .addCase(addBook, (store, {payload})=> [...store, payload]);
    .addCase(addBook, (store, {payload})=> {
      store.push(payload);
    });
})

// const booksReducer = (store = [], action) => {
//     switch (action.type) {
//       case addBook.type:
//         return [...store, action.payload];
//       case deleteBook.type:
//         return store.filter((item) => item.id !== action.payload);
//     default:
//         return store;
//   };
// }

export default booksReducer;