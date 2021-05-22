import {combineReducers, createStore} from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';

let rootReducer = combineReducers({
    profileData: profileReducer,
    dialogsData: dialogsReducer,
    sidebarData: sidebarReducer,
    usersData: usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);

export default store;