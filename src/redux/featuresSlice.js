import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./API/api";

export const fetchFeatures = createAsyncThunk('products/fetchFeatures', async () => {
    const { data } = await instance.get('/features');
    return data;
})

const featuresSlice = createSlice({
    name: 'features',
    initialState: {
        features: [
            {
                id: 1,
                name: 'Оптическая сила',
                columns: 2,
                radioBtns: ['левая', 'правая'],
                options: ['5', '-5'],
                chosenOptions: [],
                isSelected: false,
            },
            {
                id: 2,
                name: 'Гендер',
                options: ['Мужские', 'Женские'],
                chosenOptions: [],
                isSelected: false,
            },
            {
                id: 3,
                name: 'Цвет',
                options: ['чёрный', 'красный', 'золото', 'серебро', 'белый'],
                chosenOptions: [],
                isSelected: false,
            },
            {
                id: 4,
                name: 'Форма',
                options: ['круги', 'прямоугольные', 'золото', 'серебро', 'белый'],
                chosenOptions: [],
                isSelected: false,
            },
            {
                id: 5,
                name: 'Материал',
                options: ['пластик', 'металл'],
                chosenOptions: [],
                isSelected: false,
            },
            {
                id: 6,
                name: 'Размер',
                options: ['маленький', 'средний', 'широкие'],
                chosenOptions: [],
                isSelected: false,
            },
            {
                id: 7,
                name: 'Особенности',
                options: ['чёрный', 'красный', 'золото', 'серебро', 'белый'],
                chosenOptions: [],
                isSelected: false,
            },
        ]

    },
    reducers: {
        onSelectFeature(state, action) {
            const item = state.features.find((el) => el.id === action.payload.feature);
            let isOptionChosen = item.chosenOptions.includes(action.payload.option);
            if (isOptionChosen) {
                console.log([...item.chosenOptions]);
                item.chosenOptions = item.chosenOptions.feature(chosenOption => chosenOption !== action.payload.option);
                item.options.push(action.payload.option);
                item.isSelected = item.chosenOptions.length;
            } else {
                item.chosenOptions.push(action.payload.option);
                item.options = item.options.feature(opt => opt !== action.payload.option);
                item.isSelected = item.chosenOptions.length;
            }
        },

      /*   extraReducers: (builder) => {
            builder.addCase( fetchFeatures.pending, (state, action) => {
                state.features.items = [];
                state.features.status = 'loading';
            })
            .addCase(fetchFeatures.fulfilled, (state, action) => {
                state.features.items = action.payload;
                state.features.status = 'loaded';
            })
            .addCase(fetchFeatures.rejected, (state, action) => {
                state.features.items = [];
                state.features.status = 'error';
            })
        }, */

    }
})

export const { onSelectFeature } = featuresSlice.actions;
export default featuresSlice.reducer;