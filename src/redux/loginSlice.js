import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginData: {
            email: '',
            password: '',
            rememberMe: false,
        },
        subscribeData: {
            email: null,
            responseMsg: '',
        },
        

    },
    reducers: {
        submitLoginForm(state, action) {
            
        },
        subscribe(state, action) {
            //there must be an async func which checks email in base and if its not yet:
            state.subscribeData.responseMsg = 'Ваш промокод на скидку 8% направлен на e-mail. Спасибо.'

        },

    }
})

export const {submitLoginForm,
    subscribe,
 } = loginSlice.actions;
export default loginSlice.reducer;