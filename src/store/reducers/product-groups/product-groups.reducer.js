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

        case PRODUCT_GROUPS_ACTIONS.GET_GROUPS_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload,
            }

        case PRODUCT_GROUPS_ACTIONS.CREATE_GROUP_START:
            return {
                ...state,
                errorMessage: null,
                isLoading: true
            }
        case PRODUCT_GROUPS_ACTIONS.CREATE_GROUP_ERROR:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        case PRODUCT_GROUPS_ACTIONS.CREATE_GROUP_SUCCESS:
            return {
                ...state,
                isLoading: false,
                errorMessage: null,
            }
        default:
            return state;
    }
}