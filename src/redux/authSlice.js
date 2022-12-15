import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance, { API_URL } from "./API/api";
//import { fetchAddToFavorites } from "./fetchers/fetchers.js";


export const fetchAuth = createAsyncThunk('auth/fetchAuth', async (params) => {
    let response = await instance.post('/auth/login', params);
    //console.log(response)
    localStorage.setItem('token', response.data.accessToken)
    //localStorage.setItem('token', response.data.accessToken) // maybe also refreshtoken here?
    return response.data;
})

export const fetchLogout = createAsyncThunk('auth/fetchLogout', async () => {
    let response = await instance.post('/auth/logout');
    //console.log(response)
    return response.data;
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    let response = await instance.get('/auth/me');
    return response.data;
})

export const checkAuth = createAsyncThunk('auth/checkAuth', async () => {
    try {
        const response = await axios.get(`${API_URL}auth/refresh`, { withCredentials: true });
        //console.log(response)
        return response.data;
    } catch (error) {
        console.log(error)
    } 
})

export const fetchRegister = createAsyncThunk('auth/fetchRegister', async (params) => {
    let response = await instance.post('/auth/register', params);
    console.log(response);
    localStorage.setItem('token', response.data.accessToken)
    return response.data.user;
})

export const fetchAddToFavorites = createAsyncThunk('auth/fetchAddToFavorites', async (productId) => {
    const response = await instance.post(`/addtofav`, {productId});
    //console.log(response);
    return response.data;
})
export const fetchRemoveFromFavorites = createAsyncThunk('auth/fetchRemoveFromFavorites', async (productId) => {
    const response = await instance.post(`/removefav`, {productId});
    //console.log(response);
    return response.data;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        loginData: {
            data: null,
            status: 'loaded',
        },

        subscribeData: {
            email: '',
            responseMsg: '',
        },
    },
    reducers: {
        subscribe(state, action) {
            //there must be an async func which checks email in base and if its not yet:
            state.subscribeData.responseMsg = 'Ваш промокод на скидку 8% направлен на e-mail. Спасибо.'
        },
        /* logout(state) {
            state.loginData.data = null;
        } */
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAuth.pending, (state) => {
            state.loginData.status = 'loading';
            state.loginData.data = null;
        })
            .addCase(fetchAuth.fulfilled, (state, action) => {
                state.loginData.status = 'loaded';
                state.loginData.data = action.payload.user;
            })
            .addCase(fetchAuth.rejected, (state) => {
                state.loginData.status = 'loaded';
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

            .addCase(fetchLogout.pending, (state) => {
                state.loginData.status = 'loading';
                //state.loginData.data = null;
            })
            .addCase(fetchLogout.fulfilled, (state, action) => {
                state.loginData.status = 'loaded';
                state.loginData.data = null;
            })
            .addCase(fetchLogout.rejected, (state) => {
                state.loginData.status = 'error';
                //state.loginData.data = null;
            })

            .addCase(checkAuth.pending, (state) => {
                state.loginData.status = 'loading';
                state.loginData.data = null;
            })
            .addCase(checkAuth.fulfilled, (state, action) => {
                state.loginData.status = 'loaded';
                state.loginData.data = action.payload;
            })
            .addCase(checkAuth.rejected, (state) => {
                state.loginData.status = 'error';
                state.loginData.data = null;
            })

            .addCase(fetchRegister.pending, (state) => {
                state.loginData.status = 'loading';
                state.loginData.data = null;
            })
            .addCase(fetchRegister.fulfilled, (state, action) => {
                console.log(action.payload)
                state.loginData.status = 'loaded';
                state.loginData.data = action.payload;
            })
            .addCase(fetchRegister.rejected, (state, action) => {
                //console.log(action)
                state.loginData.status = 'error';
                state.loginData.data = null;
            })

            .addCase(fetchAddToFavorites.pending, (state, action) => {
                state.loginData.status = 'loading';
            })
            .addCase(fetchAddToFavorites.fulfilled, (state, action) => {
                //console.log(action.payload)
                state.loginData.data.favourites = action.payload;
                state.loginData.status = 'loaded';
            })
            .addCase(fetchAddToFavorites.rejected, (state, action) => {
                //state.currentProduct.item = {};
                state.loginData.status = 'error';
            })

            
            .addCase(fetchRemoveFromFavorites.pending, (state, action) => {
                state.loginData.status = 'loading';
            })
            .addCase(fetchRemoveFromFavorites.fulfilled, (state, action) => {
                //console.log(action.payload)
                state.loginData.data.favourites = action.payload;
                state.loginData.status = 'loaded';
            })
            .addCase(fetchRemoveFromFavorites.rejected, (state, action) => {
                //state.currentProduct.item = {};
                state.loginData.status = 'error';
            })

    },

});

export const selectIsAuth = state => Boolean(state.auth.loginData.data);
export const selectIsManager = state => Boolean(state.auth.loginData.data?.role === 'ADMIN');



export const { subscribe, } = authSlice.actions;
export default authSlice.reducer;