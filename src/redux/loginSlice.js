import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
        loginData: {
            email: '',
            password: '',
            rememberMe: false,
        }
        

    },
    reducers: {
        submitLoginForm(state, action) {
            
        },

    }
})

export const {submitLoginForm } = loginSlice.actions;
export default loginSlice.reducer;