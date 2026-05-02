import { combineReducers } from "@reduxjs/toolkit";

import booksReducer from "./books/booksSlice";
import purchasesReducer from "./purchases/purchasesSlice";

const rootReducer = combineReducers({
    books: booksReducer,
    purchases: purchasesReducer
});

export default rootReducer;