import {ActionsTypes,} from './store';
import {authAPI} from '../api/api';
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux-store';
import {stopSubmit} from 'redux-form';

let initialState: InitialStateTypeAuth = {
    userID: null,
    email: null,
    login: null,
    isAuth: false
}

export type InitialStateTypeAuth = {
    userID: null | string
    email: null | string
    login: null | string
    isAuth: boolean
}


const SET_USER_DATA = 'SET-USER-DATA';


const authReducer = (state: InitialStateTypeAuth = initialState, action: ActionsTypes): InitialStateTypeAuth => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.authData,
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
export const getAuthUserData = (): ThunkType => (dispatch) => {
    authAPI.me().then(response => {
        if (response.data.resultCode === 0) {
            let {id: userID, email, login} = response.data.data
            dispatch(setAuthUserData({userID, email, login, isAuth: true}))
        }
    })
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>

export const login = (email: string, password: string, rememberMe = false): ThunkType => (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
           dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some wrong'
            dispatch(stopSubmit('login', {_error: message}))
        }
    })
}

export const logout = (): ThunkType => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData({userID: null, email: null, login: null, isAuth: false}))
        }
    })
}
export default authReducer;

