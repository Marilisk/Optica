import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "./API/api";

export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    let data = await instance.post('/auth/login', params);
    return data.data;
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    let data = await instance.get('/auth/me');
    return data.data;
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    let data = await instance.post('/auth/register', params);
    console.log(data);
    return data.data;
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginData: {
            data: null,
            status: 'loading',
        },

        subscribeData: {
            email: '',
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
        logout(state) {
            state.loginData.data = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuth.pending, (state) => {
            state.loginData.status = 'loading';
            state.loginData.data = null;
        })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.loginData.status = 'loaded';
                state.loginData.data = action.payload;
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.loginData.status = 'loading';
                state.loginData.data = 'error';
            })

            .addCase(fetchAuthMe.pending, (state) => {
                state.loginData.status = 'loading';
                state.loginData.data = null;
            })
            .addCase(fetchAuthMe.fulfilled, (state, action) => {
                state.loginData.status = 'loaded';
                state.loginData.data = action.payload;
            })
            .addCase(fetchAuthMe.rejected, (state) => {
                state.loginData.status = 'error';
                state.loginData.data = null;
            })

            .addCase(fetchRegister.pending, (state) => {
                state.loginData.status = 'loading';
                state.loginData.data = null;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                state.loginData.status = 'loaded';
                state.loginData.data = action.payload;
            })
            .addCase(fetchRegister.rejected, (state) => {
                state.loginData.status = 'error';
                state.loginData.data = null;
            })

    },

});

export const selectIsAuth = state => Boolean(state.auth.loginData.data);
export const selectIsManager = state => state.auth.loginData.data.token === '';

export const { submitLoginForm,
    subscribe,
    logout,
} = authSlice.actions;
export default authSlice.reducer;