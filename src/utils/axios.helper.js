import axios from "axios"
import { store } from "../store";
import { logoutStart } from "../store/actions";

export const configureAxios = () => {
    axios.interceptors.response.use(function (response) {
        return response?.data;
    },
        function (error) {
            console.log("error", {...error});
            if (error?.response) {
                const { data } = error?.response;
                if (data?.statusCode === 401) {
                    console.log("401");
                    store.dispatch(logoutStart());
                }
                return Promise.reject(data);
            }

            return Promise.reject(error);
        });

    axios.interceptors.request.use(function (request) {
        const auth = store.getState().auth; // ?.userAuthData;
        request.headers['Content-Type'] = 'application/json';
        console.log("REQUESR AUTH ", auth);
        if (auth?.userAuthData?.token) {
            const { token } = auth.userAuthData;
            request.headers["Authorization"] = "Bearer " + token.accessToken;
        }

        return request;
    })
};