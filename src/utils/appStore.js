import { configureStore } from "@reduxjs/toolkit";
import cartSclice from "./cartSclice";

const appStore= configureStore({
    reducer:{
        cart: cartSclice
    }
});

export default appStore