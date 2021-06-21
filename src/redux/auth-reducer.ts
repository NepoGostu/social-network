import {ActionsTypes,} from './store';

let initialState: InitialStateTypeAuth = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateTypeAuth = {
    userID: null
    email: null
    login: null
    isAuth: boolean
}


const SET_USER_DATA = 'SET-USER-DATA';


const authReducer = (state: InitialStateTypeAuth = initialState, action: ActionsTypes): InitialStateTypeAuth => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.authData,
                isAuth: true
                }
        default:
            return state;
    }
}

export const setAuthUserData = (authData: InitialStateTypeAuth) => {
    return {
        type: SET_USER_DATA,
        authData
    } as const
}
export default authReducer;

