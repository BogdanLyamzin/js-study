import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const purchasesSlice = createSlice({
    name: "purchases",
    initialState: [],
    reducers: {
        addPurchase: {
            reducer: (store, {payload})=> {
                store.push(payload);
            },
            prepare: data => ({
                payload: {
                    ...data,
                    id: nanoid()
                }
            })
        },
        deletePurchase: (store, {payload})=> store.filter(item => item.id !== payload),
    }
});

export const {addPurchase, deletePurchase} = purchasesSlice.actions;

export default purchasesSlice.reducer;