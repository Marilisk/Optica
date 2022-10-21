import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
    name: 'filters',
    initialState: {
        filterOptions: [
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
        onSelectFilter(state, action) {
            const item = state.filterOptions.find((el) => el.id === action.payload.filter);
            let isOptionChosen = item.chosenOptions.includes(action.payload.option);
            if (isOptionChosen) {
                console.log([...item.chosenOptions]);
                item.chosenOptions = item.chosenOptions.filter(chosenOption => chosenOption !== action.payload.option);
                item.options.push(action.payload.option);
                item.isSelected = item.chosenOptions.length;
            } else {
                item.chosenOptions.push(action.payload.option);
                item.options = item.options.filter(opt => opt !== action.payload.option);
                item.isSelected = item.chosenOptions.length;
            }
        },

    }
})

export const { onSelectFilter } = filtersSlice.actions;
export default filtersSlice.reducer;