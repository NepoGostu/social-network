import {ActionsTypes, sidebarDataType} from './store';

let initialState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'}
    ]
}

const sidebarReducer = (state = initialState, action: ActionsTypes): sidebarDataType => {
    return state;
}

export default sidebarReducer;