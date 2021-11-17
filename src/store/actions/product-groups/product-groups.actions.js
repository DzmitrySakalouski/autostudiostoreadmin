import { PRODUCT_GROUPS_ACTIONS } from ".";

export const getProductGroups = () => ({
    type: PRODUCT_GROUPS_ACTIONS.GET_GROUPS_START,
});

export const getProductGroupsSuccess = (groups) => ({
    type: PRODUCT_GROUPS_ACTIONS.GET_GROUPS_SUCCESS,
    payload: groups,
});

export const getProductGroupsError = (errorMessage) => ({
    type: PRODUCT_GROUPS_ACTIONS.GET_GROUPS_ERROR,
    payload: errorMessage,
});