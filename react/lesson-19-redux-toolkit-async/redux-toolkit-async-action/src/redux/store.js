// import { legacy_createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from "redux-persist";

// import booksReducer from "./books/booksReducer";
// import purchasesReducer from "./purchases/purchasesReducer";

import rootReducer from "./rootReducer";

// const enchancer = devToolsEnhancer();

// const store = legacy_createStore(rootReducer, enchancer);
export const store = configureStore({
    // reducer: {
    //     books: booksReducer,
    //     purchases: purchasesReducer
    // }
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
})

export const persistor = persistStore(store);


