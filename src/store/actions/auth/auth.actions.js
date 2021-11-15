import { AUTH } from "./auth.types"

export const startAuthentication = ({ email, password }) => ({
    type: AUTH.AUTHENTICATION_START,
    payload: { email, password },
});

export const authenticationFailure = errorMessage => ({
    type: AUTH.AUTHENTICATION_ERROR,
    payload: errorMessage,
});

export const authenticationSuccess = payload => ({
    type: AUTH.AUTHENTICATION_SUCCESS,
    payload
});
