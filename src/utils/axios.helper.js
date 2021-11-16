import axios from "axios"
import { store } from "../store";

export const configureAxios = () => {
    axios.interceptors.response.use(function(response) {
        return response?.data;
    },
    function(error) {
        return Promise.reject(error?.response?.data);
    });

    axios.interceptors.request.use(function(request) {
        const {token} = store.getState().auth?.userAuthData;
        request.headers['Content-Type'] = 'application/json';
        if (token) {
            request.headers["Authorization"] = "Bearer " + token.accessToken;
        }
        
        return request;
    })
};