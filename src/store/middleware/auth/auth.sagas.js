import axios from 'axios';
import { takeEvery, put, call } from 'redux-saga/effects';
import { AUTHENTICATION } from '../../../constants';
import { AUTH, authenticationFailure, authenticationSuccess, logoutError, logoutSuccess } from '../../actions';

function* authenticateAsync(action) {
    try {
        const { email, password } = action.payload;
        const result = yield axios.post(AUTHENTICATION.SIGNIN(), { email, password });
        yield call(localStorage.setItem('auth', JSON.stringify(result.token)));
        yield put(authenticationSuccess(result));
    } catch (error) {
        const { message } = error;
        yield put(authenticationFailure(message))
    }
}

export function* authenticationStart() {
    yield takeEvery(AUTH.AUTHENTICATION_START, authenticateAsync);
}

export function* logoutAsync() {
    try {
        yield axios.get(AUTHENTICATION.LOG_OUT());
        yield put(logoutSuccess());
    } catch (error) {
        console.log("LOGOUT ERROR", error);
        yield put(logoutError(error.message));
    }
    yield axios.get(AUTHENTICATION.LOG_OUT());
}

export function* logoutStart() {
    yield takeEvery(AUTH.LOG_OUT_START, logoutAsync)
}