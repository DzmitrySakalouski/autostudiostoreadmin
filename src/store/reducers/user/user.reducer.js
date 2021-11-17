import { UserActionTypes } from "../../actions";

const initialState = {
    userData: null,
    errorMessage: null,
    isLoading: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UserActionTypes.GET_DATA_START:
            return {
                ...state,
                errorMessage: null,
                isLoading: true,
            }
        case UserActionTypes.GET_DATA_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isLoading: false,
                errorMessage: null,
            }
        case UserActionTypes.GET_DATA_ERROR:
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