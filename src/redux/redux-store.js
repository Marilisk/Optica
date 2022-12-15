import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import featuresSlice from "./featuresSlice";
import headerSlice from "./headerSlice";
import authSlice from "./authSlice";
import productsSlice from "./productsSlice";


export default configureStore({
    reducer: {
        header: headerSlice,
        filters: featuresSlice,
        products: productsSlice,
        categories: categoriesSlice,
        auth: authSlice,
    },
})