import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./slices/CartItemslice";

export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer
    }
})