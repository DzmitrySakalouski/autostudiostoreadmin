import { AUTH } from "../../actions/auth/auth.types";

const initialState = {
    userData: null,
    errorMessage: null,
    isLoading: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.AUTHENTICATION_START: 
            return {
                ...state,
                userData: null,
                isLoading: true,
                errorMessage: null,
            }
        case AUTH.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                userData: payload,
                isLoading: false,
                errorMessage: null,
            }
        case AUTH.AUTHENTICATION_ERROR:
            return {
                ...state,
                userData: null,
                isLoading: false,
                errorMessage: action.payload,
            }
    
        default:
            return state;
    }
}