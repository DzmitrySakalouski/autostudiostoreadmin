export const BASE_URL = "http://localhost:3001";

export const AUTHENTICATION = {
    SIGNIN: () => `${BASE_URL}/auth/login`,
}

export const USER = {
    DATA: () => `${BASE_URL}/users/me`,
}