import { combineReducers } from "redux";
import { authReducer } from "./auth";
import { productGroupReducer } from "./product-groups";
import { userReducer } from "./user";

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    productGroups: productGroupReducer
});