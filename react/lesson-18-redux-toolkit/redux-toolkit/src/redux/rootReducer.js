import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import booksReducer from "./books/booksReducer";
import purchasesReducer from "./purchases/purchasesSlice";

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["purchases"]
}

const rootReducer = combineReducers({
    books: booksReducer,
    purchases: purchasesReducer
});

const rootPersistedReducer = persistReducer(persistConfig, rootReducer);

export default rootPersistedReducer;