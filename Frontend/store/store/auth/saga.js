import { all, put, takeEvery } from 'redux-saga/effects';
import {notification } from 'antd';

import { actionTypes, registerSuccess, registerFailed, loginSuccess, loginFailed ,logOutSuccess } from './action';

const modalSuccess = type => {
    notification[type]({
        message: 'Wellcome back',
        description: 'You are login successful!',
    });
};

const modalWarning = type => {
    notification[type]({
        message: 'Good bye!',
        description: 'Your account has been logged out!',
    });
};
const modalFailed = type => {
    notification[type]({
        message: 'Error!',
        description: 'Sorry you were not able be logged in',
    });
};

function* loginSaga() {
    try {
        yield put(loginSuccess());
        modalSuccess('success');
    } catch (err) {
        console.log(err);
    }
}

function* registerSuccessSaga() {
    try {
        yield put(registerSuccess());
        modalSuccess('success');
    } catch (err) {
        console.log(err);
    }
}


function* loginFailedSaga() {
    try {
        yield put(loginFailed());
        modalFailed('warning');
    } catch (err) {
        console.log(err);
    }
}


function* registerFailedSaga() {
    try {
        yield put(registerFailed());
        modalFailed('warning');
    } catch (err) {
        console.log(err);
    }
}

function* logOutSaga() {
    try {
        yield put(logOutSuccess());
        modalWarning('warning');
    } catch (err) {
        console.log(err);
    }
}

export default function* rootSaga() {
    yield all([takeEvery(actionTypes.LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(actionTypes.REGISTER_SUCCESS, registerSuccessSaga)])
    yield all([takeEvery(actionTypes.REGISTER_SUCCESS, registerFailedSaga)])
    yield all([takeEvery(actionTypes.LOGIN_FAILED, loginFailedSaga)])
    yield all([takeEvery(actionTypes.LOGOUT, logOutSaga)]);
}
