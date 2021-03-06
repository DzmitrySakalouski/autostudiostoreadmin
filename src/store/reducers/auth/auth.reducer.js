import { AUTH } from "../../actions/auth/auth.types";

const initialState = {
    userAuthData: null,
    errorMessage: null,
    isLoading: false,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH.AUTHENTICATION_START:
            return {
                ...state,
                userAuthData: null,
                isLoading: true,
                errorMessage: null,
            }
        case AUTH.AUTHENTICATION_SUCCESS:
            return {
                ...state,
                userAuthData: action.payload,
                isLoading: false,
                errorMessage: null,
            }

        case AUTH.AUTHENTICATION_ERROR:
            return {
                ...state,
                userAuthData: null,
                isLoading: false,
                errorMessage: action.payload,
            }

        case AUTH.LOG_OUT_START:
            return {
                ...state,
                isLoading: true,
                errorMessage: null,
            }

        case AUTH.LOG_OUT_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }

        case AUTH.LOG_OUT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                userAuthData: null,
            }

        default:
            return state;
    }
}