import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from "./slices/cartItems";
import languageReducer from "./slices/language";

const store=configureStore({
    reducer :{
        cartItems:cartItemReducer ,
        language:languageReducer
        
    } 
})
export default store