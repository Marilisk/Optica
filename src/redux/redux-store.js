import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./categoriesSlice";
import featuresSlice from "./featuresSlice";
import headerSlice from "./headerSlice";
import authSlice from "./authSlice";
import productsSlice from "./productsSlice";
import lensesSlice from "./lensesSlice";
import { goodsApi } from "./API/RTKQueryGoodsApi";


export default configureStore({
    reducer: {
        [goodsApi.reducerPath]: goodsApi.reducer,
        header: headerSlice,
        filters: featuresSlice,
        products: productsSlice,
        categories: categoriesSlice,
        auth: authSlice,
        lenses: lensesSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsApi.middleware),
})