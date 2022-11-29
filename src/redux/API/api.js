import axios from "axios";


const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

instance.interceptors.request.use((config) => {  // теперь любой запрос с инстансом понимает есть токен или нет
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance;