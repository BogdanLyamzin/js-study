import { combineReducers } from "redux";

import booksReducer from "./books/booksReducer";
import purchasesReducer from "./purchases/purchasesReducer";

const rootReducer = combineReducers({
    books: booksReducer,
    purchases: purchasesReducer
})

export default rootReducer;