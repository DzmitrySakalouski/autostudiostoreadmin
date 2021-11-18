import { all } from '@redux-saga/core/effects';
import { logoutStart, authenticationStart } from './auth';
import { createProductGroup, getProductGroups } from './product-groups';
import { getUserDataStart } from './user'

export function* rootSaga() {
    yield all([
        logoutStart(),
        authenticationStart(),
        getUserDataStart(),
        getProductGroups(),
        createProductGroup(),
    ])
}