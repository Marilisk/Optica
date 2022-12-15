import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
    name: 'header',
    initialState: {
        fullHeader: true, 
        menuOpened: null,
        loginModalOpened: false,    
        mainMenu: [{
            name: 'Женщины',
            url: `women`,
            /* links: [ {label: 'Все оправы', to: '/women'}, 
                {label: 'Оправы до 3000руб. ', to: '/women'}, {label: 'Все оправы', to: '/women'}, {label: 'Все оправы', to: '/women'}] */
        },
        {
            name: 'Мужчины',
            url: `men`,
        },
        {
            name: 'Дети',
            url: `children`,
        },
        {
            name: 'Brands',
            url: `brands`,
        },],     

    },
    reducers: {
        setfullHeaderTheme(state, action) {
            state.fullHeader = action.payload;
        },
        toggleMenuOpened(state, action) {
            state.menuOpened = action.payload;
        },
        toggleLoginModalOpened(state, action) {
            state.loginModalOpened = action.payload;
        },

    }
})

export const { setfullHeaderTheme, toggleMenuOpened, toggleLoginModalOpened, } = headerSlice.actions;
export default headerSlice.reducer;