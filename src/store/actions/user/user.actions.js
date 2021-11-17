import { UserActionTypes } from "./user.types";

export const getUserDataStart = () => ({
    type: UserActionTypes.GET_DATA_START
});

export const getUserDataSuccess = (payload) => ({
    type: UserActionTypes.GET_DATA_SUCCESS,
    payload,
});

export const getUserDataError = (errorMessage) => ({
    type: UserActionTypes.GET_DATA_SUCCESS,
    payload: errorMessage,
});