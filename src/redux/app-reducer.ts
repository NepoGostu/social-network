import {ActionsTypes,} from './store';
import {ThunkAction} from 'redux-thunk'
import {AppStateType} from './redux-store';
import {getAuthUserData} from './auth-reducer';

let initialState: InitialStateTypeAuth = {
    initialized: false
}

export type InitialStateTypeAuth = {
    initialized: boolean
}


const INITIALIZED_SUCCESS = 'INITIALIZED-SUCCESS';


const appReducer = (state: InitialStateTypeAuth = initialState, action: ActionsTypes): InitialStateTypeAuth => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    } as const
}
export const initializeApp = (): ThunkType => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise]).then(() => {
        dispatch(setInitializedSuccess())
    })
}

export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsTypes>


export default appReducer;

