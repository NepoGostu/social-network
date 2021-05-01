import profileReducer, {addPostAC, changeNewTextAC} from './profile-reducer';
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

export type StoryType = {
    _state: StateType
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
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
export type proFileDataType = {
    posts: Array<PostsType>
    newPostText: string
}
export type dialogsDataType = {
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

const store: StoryType = {
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
            ]
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

        /*if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            this._state.profileData.posts.push(newPost);
            this._state.profileData.newPostText = '';
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profileData.newPostText = action.newText;
            this._onChange();
        } else if (action.type === 'UPDATE-NEW-MESSAGE-BODY') {
            this._state.dialogsData.newMessageBody = action.newMessage;
            this._onChange();
        } else if (action.type === 'SEND-MESSAGE') {
                const sendMessage: MessageType = {
                    id: new Date().getTime(),
                    message: action.newSendMessage,
                };
                this._state.dialogsData.messages.push(sendMessage);
                this._state.dialogsData.newMessageBody = '';
                this._onChange();
        }*/
    }
}

// window.state = state;


export default store