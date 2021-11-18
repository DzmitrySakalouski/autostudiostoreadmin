import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import { PRODUCTS } from '../../../constants/endpoints';
import { getProductGroupsError, getProductGroupsSuccess, getProductGroupsStart, PRODUCT_GROUPS_ACTIONS, createGroupSuccess, createGroupError, deleteProductGroupSuccess, deleteProductGroupError } from '../../actions';

function* getProductGroupsAsync() {
    try {
        const groups = yield axios.get(PRODUCTS.PRODUCT_GROUPS());
        yield put(getProductGroupsSuccess(groups));
    } catch (error) {
        yield put(getProductGroupsError(error.message));
    }
}

export function* getProductGroups() {
    yield takeEvery(PRODUCT_GROUPS_ACTIONS.GET_GROUPS_START, getProductGroupsAsync);
}

function* createGroupAsync(action) {
    try {
        yield axios.post(PRODUCTS.PRODUCT_GROUPS(), {...action.payload});
        yield put(createGroupSuccess());
        yield put(getProductGroupsStart());
    } catch (error) {
        yield put(createGroupError(error.message));
    }
}

export function* createProductGroup() {
    yield takeEvery(PRODUCT_GROUPS_ACTIONS.CREATE_GROUP_START, createGroupAsync);
}

function* deleteProductGroupAsync(action) {
    try {
        yield axios.delete(PRODUCTS.DELETE_PRODUCT_GROUP(action.payload));
        yield put(deleteProductGroupSuccess());
        yield put(getProductGroupsStart());
    } catch (error) {
        yield put(deleteProductGroupError(error.message));
    }
}

export function* deleteProductGroup() {
    yield takeEvery(PRODUCT_GROUPS_ACTIONS.DELETE_GROUP_START, deleteProductGroupAsync);
}