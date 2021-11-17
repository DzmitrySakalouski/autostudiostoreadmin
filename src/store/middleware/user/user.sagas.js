import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { USER } from '../../../constants/endpoints';
import { getUserDataError, getUserDataSuccess, logoutStart, UserActionTypes } from '../../actions';

function* getUserData() {
    try {
        const user = yield axios.get(USER.DATA());
        yield put(getUserDataSuccess(user));
    } catch (error) {
        yield put(getUserDataError(error.message));
    }

}

export function* getUserDataStart() {
    yield takeEvery(UserActionTypes.GET_DATA_START, getUserData);
}