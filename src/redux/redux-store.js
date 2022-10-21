import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import filtersSlice from "./filtersSlice";
import productsSlice from "./productsSlice";


export default configureStore({
    reducer: {
        filters: filtersSlice,
        products: productsSlice,
        categories: categoriesSlice,
    },
})