import axios from "axios"

export const configureAxios = () => {
    axios.interceptors.response.use(function(response) {
        return response?.data;
    },
    function(error) {
        return Promise.reject(error?.response?.data);
    })
};