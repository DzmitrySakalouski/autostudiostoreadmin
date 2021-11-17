import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import { PRODUCTS } from '../../../constants/endpoints';
import { getProductGroupsError, getProductGroupsSuccess, PRODUCT_GROUPS_ACTIONS } from '../../actions';

function* getProductGroupsAsync() {
    try {
        const groups = yield axios.get(PRODUCTS.PRODUCT_GROUPS());
        yield put(getProductGroupsSuccess(groups));
    } catch (error) {
        yield put(getProductGroupsError(error.message))
    }
}

export function* getProductGroups() {
    yield takeEvery(PRODUCT_GROUPS_ACTIONS.GET_GROUPS_START, getProductGroupsAsync);
}