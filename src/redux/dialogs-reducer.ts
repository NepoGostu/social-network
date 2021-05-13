import {ActionsTypes, MessageType} from './store';

export type DialogsType = {
    id: number
    name: string
}

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState: InitialStateType = {
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

export type InitialStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    newMessageBody: string
}

const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.newMessage
            };
            // stateCopy.newMessageBody = action.newMessage;
        case SEND_MESSAGE:
            let body = state.newMessageBody
            return{
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: new Date().getTime(), message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageAC = () => {
    return {
        type: SEND_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (newMessage: string) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessage: newMessage
    } as const
}

export default dialogsReducer;