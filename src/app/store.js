import { configureStore } from "@reduxjs/toolkit";
import { TranslateSlice } from "./translateClice";

export default configureStore({
    reducer: {
        translate:TranslateSlice.reducer,
         
    }
})