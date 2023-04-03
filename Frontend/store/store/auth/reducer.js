import { actionTypes ,} from './action';
import Repository from '~/repositories/Repository';

export const initState = {
    isLoggedIn: false,
    user:{} ,
};

function reducer(state = initState, actions ) {
    switch (actions.type) {
        case actionTypes.LOGIN_REQUEST:
            return{
                ...state
            };
        case actionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: true },
                ...{user: actions.payload,}
            };
        case actionTypes.LOGIN_FAILED:
            return {
                ...state,
                ...{ isLoggedIn: false}
            };
        case actionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                ...{ isLoggedIn: false },
            };
        default:
            return state;
    }
}

export default reducer;
