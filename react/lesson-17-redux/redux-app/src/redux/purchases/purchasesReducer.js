import { ADD_PURCHASE, DELETE_PURCHASE } from "./purchasesConstants";

const purchasesReducer = (store = [], action) => {
  switch (action.type) {
    case ADD_PURCHASE:
      return [...store, action.payload];
    case DELETE_PURCHASE:
      return store.filter((item) => item.id !== action.payload);
    default:
      return store;
  }
};

export default purchasesReducer;
