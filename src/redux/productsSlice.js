import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./API/api.js";

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const { data } = await instance.get('/products');
    return data;
});
export const fetchProd = createAsyncThunk('products/fetchProd', async (id) => { 
    const data = await instance.get(`/products/${id}`);
    return data.data;
});
export const fetchDeleteProd = createAsyncThunk('products/fetchDeleteProd', async (id) => {
    const data = await instance.delete(`/products/` + id);
    console.log(data);
    if (data.data.success === 'true') {

    }
    return {data: data.data, id};
});


const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: {
            items: [ ],
            status: 'loading',
        },
    
        currentProduct: {item: null, status: 'loading' },
        tags: {
            items: [],
            status: 'loading',
        },
        bestsellersPortion: 0,
    },
    reducers: {
        onAddToCart(state, action) {
            //const item = state.items.find(el => el.id === action.payload.item);
        },
        anotherBestsellers(state, action) {
            state.bestsellersPortion = action.payload ?
                ++state.bestsellersPortion
                : --state.bestsellersPortion;
        },
        setCurrentProd(state, action) {
            //console.log(action);
            state.currentProduct.item = action.payload;
            state.currentProduct.status = 'loaded';
        },

    },
    extraReducers: (builder) => {
        builder.addCase( fetchProducts.pending, (state, action) => {
            state.products.items = [];
            state.products.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products.items = action.payload;
            state.products.status = 'loaded';
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.products.items = [];
            state.products.status = 'error';
        })


        .addCase(fetchDeleteProd.pending, (state) => {
            state.products.status = 'loading';
        })
        .addCase(fetchDeleteProd.fulfilled, (state, action) => {
            state.products.items = state.products.items.filter( prod => prod.id !== action.payload );
            state.currentProduct.status = 'loaded';
        })
        .addCase(fetchDeleteProd.rejected, (state) => {
            state.products.status = 'loaded';
        })


        .addCase(fetchProd.pending, (state, action) => {
            //state.currentProduct.item = {};
            state.currentProduct.status = 'loading';
        })
        .addCase(fetchProd.fulfilled, (state, action) => {
            state.currentProduct.item = action.payload;
            state.currentProduct.status = 'loaded';
        })
        .addCase(fetchProd.rejected, (state, action) => {
            //state.currentProduct.item = {};
            state.currentProduct.status = 'error';
        })
    },
})

export const {
    onAddToCart,
    anotherBestsellers,
    setCurrentProd,    
} = productsSlice.actions;

export default productsSlice.reducer;