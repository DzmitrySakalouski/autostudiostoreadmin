import axios from "axios"
import { store } from "../store";
import { logoutStart } from "../store/actions";

export const configureAxios = () => {
    axios.interceptors.response.use(function(response) {
        return response?.data;
    },
    function(error) {
        const {data} = error?.response;
        if (data?.errorCode === 401) {
            store.dispatch(logoutStart());
        }
        return Promise.reject(data);
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