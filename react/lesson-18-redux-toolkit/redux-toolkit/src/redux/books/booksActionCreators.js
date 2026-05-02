import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

// export const addBook = data => ({
//     type: ADD_BOOK,
//     payload: {
//         id: nanoid(),
//         ...data,
//     }
// })

// export const deleteBook = payload => ({
//     type: DELETE_BOOK,
//     payload,
// })

export const addBook = createAction("books/addBook", data => ({
    payload: {
        ...data,
        id: nanoid()
    }
}))

export const deleteBook = createAction("books/deleteBook");

/*
const createAction = type => {
    const actionCreator = payload => ({
        type,
        payload,
    });
    actionCreator.type = type;
    actionCreator.toString = type;
    return actionCreator;
}
*/