import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from './app-reducer';

let rootReducers = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sidebarData: sidebarReducer,
    usersData: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
});

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
        __store__: any
    }
}

const composeEnhancers =  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
const store = createStore(rootReducers,  composeEnhancers(applyMiddleware(thunkMiddleware)));
export type AppStateType = ReturnType<typeof rootReducers>
window.__store__ = store

// let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export default store;