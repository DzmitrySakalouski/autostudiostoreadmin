import { AUTH } from "./auth.types"

export const startAuthentication = ({ email, password }) => ({
    type: AUTH.AUTHENTICATION_START,
    payload: { email, password },
});

export const authenticationFailure = payload => ({
    type: AUTH.AUTHENTICATION_ERROR,
    payload,
});

export const authenticationSuccess = payload => ({
    type: AUTH.AUTHENTICATION_SUCCESS,
    payload
});
