import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import filtersSlice from "./filtersSlice";
import headerSlice from "./headerSlice";
import loginSlice from "./loginSlice";
import productsSlice from "./productsSlice";


export default configureStore({
    reducer: {
        header: headerSlice,
        filters: filtersSlice,
        products: productsSlice,
        categories: categoriesSlice,
        login: loginSlice,
    },
})