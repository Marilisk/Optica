import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: {
        items: [
            {
                id: 1,
                name: 'Очки',
                price: 5000,
                features: ['bestSeller'],
                buyCount: 1,
                options: ['чёрный', 'красный'],
                photos: ['https://static.zennioptical.com/production/products/general/44/19/4419623-eyeglasses-front-view.jpg?im=Resize=(500)',],
            },
            {
                id: 2,
                name: 'Очки',
                price: 4000,
                features: ['bestSeller'],
                buyCount: 1,
                options: [],
                photos: ['https://static.zennioptical.com/production/products/general/32/17/3217321-eyeglasses-front-view.jpg?im=Resize=(500)'],
            },
            {
                id: 3,
                name: 'Очки',
                price: 3000,
                features: ['bestSeller'],
                buyCount: 1,
                options: ['чёрный', 'красный'],
                photos: ['https://static.zennioptical.com/production/products/general/20/31/2031517-eyeglasses-front-view.jpg?im=Resize=(500)'],
            },
            {
                id: 4,
                name: 'Очки',
                price: 5000,
                features: ['bestSeller'],
                buyCount: 1,
                options: ['чёрный', 'красный'],
                photos: ['https://static.zennioptical.com/production/products/general/78/13/7813125-eyeglasses-front-view.jpg?im=Resize=(500)'],
            },
            {
                id: 5,
                name: 'Очки',
                price: 5000,
                features: [],
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 6,
                name: 'Очки',
                price: 5000,
                features: ['bestSeller',],
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 7,
                name: 'Очки',
                price: 5000,
                features: [],
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 8,
                name: 'Очки',
                price: 5000,
                features: [],
                options: ['чёрный', 'красный'],
                photos: [],
            },
            {
                id: 9,
                name: 'Prada',
                price: 5000,
                features: [],
                options: ['чёрный', 'красный'],
                photos: [],
            },
        ],

    },
    reducers: {
        onAddToCart(state, action) {
            //const item = state.items.find(el => el.id === action.payload.item);
                   
        },
        
    }
})

export const { onAddToCart } = productsSlice.actions;
export default productsSlice.reducer;