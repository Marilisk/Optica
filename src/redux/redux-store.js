import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "./filtersSlice";


export default configureStore({
    reducer: {
        filters: filtersSlice,
    },
})