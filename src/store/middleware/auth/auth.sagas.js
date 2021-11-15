import { yellow } from '@mui/material/colors';
import axios from 'axios';
import {takeEvery} from 'redux-saga/effects';
import { AUTHENTICATION } from '../../../constants';
import { AUTH } from '../../actions';

function* authenticate(action) {
    yield console.log(action);
    try {
        const {email, password} = action.payload;
        const res = yield axios.post(AUTHENTICATION.SIGNIN(), {email, password});
        yield console.log(res)
    } catch (error) {
        yield console.log("error =>", error)
    }
}

export function* authenticationStart() {
    yield takeEvery(AUTH.AUTHENTICATION_START, authenticate);
}