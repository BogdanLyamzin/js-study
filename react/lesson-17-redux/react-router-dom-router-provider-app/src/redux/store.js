import {legacy_createStore} from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const enchancer = devToolsEnhancer();

const initialStore = {
    books: []
}

const reducer = (store = initialStore)=> {
    return store;
}

const store = legacy_createStore(reducer, enchancer);
/*
const legacy_createStore(reducer => {
    const newStore = reducer();
    return newStore;
})
*/

export default store;