import axios from "axios";

export const API_URL = 'http://localhost:4444/';

const instance = axios.create({
    //baseURL: process.env.REACT_APP_API_URL,   - for deploy
    baseURL: API_URL,
    withCredentials: true,
})

/* instance.interceptors.request.use((config) => {  //интерцептор на случай хранения токена в локалСторадже
    config.headers.Authorization = window.localStorage.getItem('token')  
    return config 
}) */

instance.interceptors.request.use( (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})


instance.interceptors.response.use( (config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401   // а вот здесь по идее должен быть код 401. но с ним не работает при перезагрузке авторизация, которая при наличии токена в сторадже проверяется
            && error.config && !error.config._isRetry ) { 
        originalRequest._isRetry = true;
        try {
            const response = await axios.get(`${API_URL}auth/refresh`, { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);  
            return instance.request(originalRequest); 
        } catch (error) {
            console.log('not authorised')
        }
        
    } 
    throw error;
}) 

export default instance;