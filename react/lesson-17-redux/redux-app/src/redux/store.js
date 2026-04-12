import {legacy_createStore} from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import { DELETE_BOOK, ADD_BOOK } from "./constatnts";

const enchancer = devToolsEnhancer();

const initialStore = {
    books: []
};

const reducer = (store = initialStore, action)=> {
    switch(action.type) {
        case DELETE_BOOK:
            return {
                ...store,
                books: store.books.filter(item => item.id !== action.payload)
            };
        case ADD_BOOK:
            return {
                ...store,
                books: [...store.books, action.payload]
            };
        default:
            return store;
    }
}

const store = legacy_createStore(reducer, enchancer);
/*
const legacy_createStore(reducer => {
    const newStore = reducer();
    return newStore;
})
*/

export default store;