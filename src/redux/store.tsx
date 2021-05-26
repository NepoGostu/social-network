import profileReducer, {addPostAC, changeNewTextAC} from './profile-reducer';
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import {followAC, setCurrentPageAC, setTotalUsersCountAC} from './users-reducer';
import {unfollowAC} from './users-reducer';
import {setUsersAC} from './users-reducer';

export type StoryType = {
    _state: StateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
type PostsType = {
    id: number
    message: string
    likesCount: number
}
type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type sidebarType = {
    id: number
    name: string
}
type proFileDataType = {
    posts: Array<PostsType>
    newPostText: string
}
type dialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string

}
export type sidebarDataType = {
    friends: Array<sidebarType>
}
export type StateType = {
    profileData: proFileDataType
    dialogsData: dialogsDataType
    sidebarData: sidebarDataType
}
export type ActionsTypes =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewTextAC>
    | ReturnType<typeof sendMessageAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>

export const store: StoryType = {
    _state: {
        profileData: {
            posts: [
                {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
                {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
            ],
            newPostText: ''
        },
        dialogsData: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'}
            ],
            newMessageBody: ''
        },
        sidebarData: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'}
            ],
        },
    },
    _onChange() {
        console.log('State has been changed')
    },
    subscribe(observer) {
        this._onChange = observer
    },
    getState() {
        return this._state
    },
    dispatch(action) {

        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.dialogsData = dialogsReducer(this._state.dialogsData, action);
        this._state.sidebarData = sidebarReducer(this._state.sidebarData, action);
        this._onChange();
    }
}

// window.state = state;


export default store