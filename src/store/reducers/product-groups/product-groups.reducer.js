import { PRODUCT_GROUPS_ACTIONS } from "../../actions";

const initialState = {
    groups: [],
    errorMessage: null,
    isLoading: false,
};

export const productGroupReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_GROUPS_ACTIONS.GET_GROUPS_START:
            return {
                ...state,
                isLoading: true,
            }

        case PRODUCT_GROUPS_ACTIONS.GET_GROUPS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
                groups: action.payload
            }

        case PRODUCT_GROUPS_ACTIONS.GET_GROUPS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }

        default:
            return state;
    }
}