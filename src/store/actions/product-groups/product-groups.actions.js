import { PRODUCT_GROUPS_ACTIONS } from ".";

export const getProductGroupsStart = () => ({
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

export const createGroupStart = (groupData) => ({
    type: PRODUCT_GROUPS_ACTIONS.CREATE_GROUP_START,
    payload: groupData
});

export const createGroupSuccess = (group) => ({
    type: PRODUCT_GROUPS_ACTIONS.CREATE_GROUP_SUCCESS,
    payload: group
});

export const createGroupError = (errorMessage) => ({
    type: PRODUCT_GROUPS_ACTIONS.CREATE_GROUP_ERROR,
    payload: errorMessage,
});

export const deleteProductGroupStart = (id) => ({
    type: PRODUCT_GROUPS_ACTIONS.DELETE_GROUP_START,
    payload: id,
});

export const deleteProductGroupSuccess = () => ({
    type: PRODUCT_GROUPS_ACTIONS.DELETE_GROUP_SUCCESS,
});

export const deleteProductGroupError = () => ({
    type: PRODUCT_GROUPS_ACTIONS.DELETE_GROUP_ERROR,
});