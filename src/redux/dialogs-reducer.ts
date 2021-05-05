import {ActionsTypes, dialogsDataType, MessageType, PostsType, StoryType} from './store';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action:ActionsTypes):dialogsDataType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newMessage;
            // this._onChange();
            return state;
        case 'SEND-MESSAGE':
            const sendMessage: MessageType = {
                id: new Date().getTime(),
                message: state.newMessageBody,
            };
            state.messages.push(sendMessage);
            state.newMessageBody = '';
            // this._onChange();
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE'
    } as const
}
export const updateNewMessageBodyAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessage: newMessage
    } as const
}

export default dialogsReducer;