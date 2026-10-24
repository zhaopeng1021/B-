import axios from "axios";
const instance = axios.create({
    baseURL: "http://127.0.0.1:3007",
    timeout: 6000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    });

    instance.interceptors.request.use(config => {
        return config;
    },function (error) {
        return Promise.reject(error);
    });

    instance.interceptors.response.use(response => {
        return response;
    },function (error) {
        return Promise.reject(error);
    });

export default instance;
   