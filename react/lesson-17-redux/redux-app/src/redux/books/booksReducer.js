import { DELETE_BOOK, ADD_BOOK} from "./booksConstants";

const booksReducer = (store = [], action) => {
    switch (action.type) {
      case ADD_BOOK:
        return [...store, action.payload];
      case DELETE_BOOK:
        return store.filter((item) => item.id !== action.payload);
    default:
        return store;
  };
}

export default booksReducer;