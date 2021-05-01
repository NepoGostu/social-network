import {ActionsTypes, dialogsDataType, MessageType, PostsType, StoryType} from './state';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
export const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state:dialogsDataType, action:ActionsTypes):dialogsDataType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            state.newMessageBody = action.newMessage;
            // this._onChange();
            return state;
        case 'SEND-MESSAGE':
            const sendMessage: MessageType = {
                id: new Date().getTime(),
                message: action.newSendMessage,
            };
            state.messages.push(sendMessage);
            state.newMessageBody = '';
            // this._onChange();
            return state;
        default:
            return state;
    }
}

export const sendMessageAC = (newSendMessage: string) => {
    return {
        type: 'SEND-MESSAGE',
        newSendMessage: newSendMessage
    } as const
}
export const updateNewMessageBodyAC = (newMessage: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        newMessage: newMessage
    } as const
}

export default dialogsReducer;