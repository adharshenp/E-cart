import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../slices/wishlistSlice";
import cartslice from "../slices/cartslice";


const store =configureStore({
    reducer:{
        wishlistReducer:wishlistSlice,
        cartReducer:cartslice

    }
})

export default store;