import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            {
                id: 1,
                name: 'Очки',
                price: 5000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 2,
                name: 'Очки',
                price: 4000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 3,
                name: 'Очки',
                price: 3000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 4,
                name: 'Очки',
                price: 5000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 5,
                name: 'Очки',
                price: 5000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 6,
                name: 'Очки',
                price: 5000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 7,
                name: 'Очки',
                price: 5000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 8,
                name: 'Очки',
                price: 5000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 9,
                name: 'Очки',
                price: 5000,
                options: ['чёрный', 'красный'],
                photos: [],
            },
        ],

    },
    reducers: {
        onAddToCart(state, action) {
            const item = state.items.find(el => el.id === action.payload.item);
                   
        },
        
    }
})

export const { onAddToCart } = productsSlice.actions;
export default productsSlice.reducer;