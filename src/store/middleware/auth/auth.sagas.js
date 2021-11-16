import { yellow } from '@mui/material/colors';
import axios from 'axios';
import { takeEvery, put } from 'redux-saga/effects';
import { AUTHENTICATION } from '../../../constants';
import { AUTH, authenticationFailure, authenticationSuccess } from '../../actions';

function* authenticate(action) {
    try {
        const { email, password } = action.payload;
        const result = yield axios.post(AUTHENTICATION.SIGNIN(), { email, password });

        yield put(authenticationSuccess(result));
    } catch (error) {
        const { message } = error;
        yield put(authenticationFailure(message))
    }
}

export function* authenticationStart() {
    yield takeEvery(AUTH.AUTHENTICATION_START, authenticate);
}