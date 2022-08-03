export const actionTypes = {
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAILED: 'REGISTER_FAILED',
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_FAILED: 'LOGIN_FAILD',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGOUT: 'LOGOUT',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
    CHECK_AUTHORIZATION: 'CHECK_AUTHORIZATION',
};


export function register() {
    return { type: actionTypes.REGISTER_REQUEST };
}

export function registerFailed() {
    return { type: actionTypes.REGISTER_FAILED};
}

export function registerSuccess(user) {
    return { 
        type: actionTypes.REGISTER_SUCCESS,
        payload: user
    };
}
export function login() {
    return { type: actionTypes.LOGIN_REQUEST };
}

export function loginFailed() {
    return { type: actionTypes.LOGIN_FAILED};
}

export function loginSuccess(user) {
    return { 
        type: actionTypes.LOGIN_SUCCESS,
        payload: user
    };
}

export function logOut() {
    return { type: actionTypes.LOGOUT };
}

export function logOutSuccess() {
    return { type: actionTypes.LOGOUT_SUCCESS };
}
