import { nanoid } from "nanoid";

import { ADD_PURCHASE, DELETE_PURCHASE } from "./purchasesConstants";

export const addPurchase = data => ({
    type: ADD_PURCHASE,
    payload: {
        id: nanoid(),
        ...data,
    }
})

export const deletePurchase = payload => ({
    type: DELETE_PURCHASE,
    payload,
})