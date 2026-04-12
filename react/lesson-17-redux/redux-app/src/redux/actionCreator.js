import { nanoid } from "nanoid";

import { DELETE_BOOK, ADD_BOOK } from "./constatnts";

export const deleteBook = payload => ({
    type: DELETE_BOOK,
    payload,
})

export const addBook = data => ({
    type: ADD_BOOK,
    payload: {
        ...data,
        id: nanoid(),
    }
})