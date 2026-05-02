import { legacy_createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

import rootReducer from "./rootReducer";

const enchancer = devToolsEnhancer();

const store = legacy_createStore(rootReducer, enchancer);

export default store;
