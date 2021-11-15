import { yellow } from '@mui/material/colors';
import axios from 'axios';
import {takeEvery, put} from 'redux-saga/effects';
import { AUTHENTICATION } from '../../../constants';
import { AUTH, authenticationSuccess } from '../../actions';

function* authenticate(action) {
    yield console.log(action);
    try {
        const {email, password} = action.payload;
        const result = yield axios.post(AUTHENTICATION.SIGNIN(), {email, password});
        yield put(authenticationSuccess(result));
    } catch (error) {
        yield console.log("error =>", error)
    }
}

export function* authenticationStart() {
    yield takeEvery(AUTH.AUTHENTICATION_START, authenticate);
}