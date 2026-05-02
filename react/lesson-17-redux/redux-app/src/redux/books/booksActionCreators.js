import { nanoid } from "nanoid";

import { DELETE_BOOK, ADD_BOOK} from "./booksConstants";

export const addBook = data => ({
    type: ADD_BOOK,
    payload: {
        id: nanoid(),
        ...data,
    }
})

export const deleteBook = payload => ({
    type: DELETE_BOOK,
    payload,
})
