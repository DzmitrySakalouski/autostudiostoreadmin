export const BASE_URL = "http://localhost:3001";

export const AUTHENTICATION = {
    SIGNIN: () => `${BASE_URL}/auth/login`,
    LOG_OUT: () => `${BASE_URL}/auth/logout`,
}

export const USER = {
    DATA: () => `${BASE_URL}/users/me`,
}

export const PRODUCTS = {
    PRODUCT_GROUPS: () => `${BASE_URL}/product-group`,
}