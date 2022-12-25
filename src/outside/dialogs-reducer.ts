import { v1 } from 'uuid'
import { ActionsType } from "./redux-store"

export type MessageType = {
    id: string
    message: string
    time: string
}

export type DialogType = {
    id: string
    name: string
    avatar: string
}

export type DialogsPagePropsType = {
    messages: MessageType[]
    dialogs: Array<DialogType>
}

export type SendMessageActionType = {
    type: 'SEND-MESSAGE'
    newMessageBody: string
}


const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    messages: [
        { id: v1(), message: 'I can\'t believe that I can talk to you now. I have so many questions for you', time: '23:00' },
        { id: v1(), message: 'Sir, when will you grab your head and start doing really sensible things but not this social network?I certainly understand that all great minds started with something, but you have already gone 4 dozen years.I\'m sure great things await you', time: '02:10' },
        { id: v1(), message: 'I\'m actually going to discourage the world with my designs. It\'s enough for me to improve my programming skills a little', time: '14:25' }
    ],
    dialogs: [
        { id: v1(), name: 'Joseph', avatar: 'https://ichef.bbci.co.uk/images/ic/576xn/p02mqthy.jpg' },
        { id: v1(), name: 'Karl', avatar: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201903/marx-647_031416112539.jpeg?8ZWI65Qeo60I_tCQ47gGwB5SCxOUOCc8&size=770:433' },
        { id: v1(), name: 'Nikola', avatar: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Tesla_circa_1890.jpeg' },
        { id: v1(), name: 'Mihail', avatar: 'https://pictolic.com/img/2021/what-we-hide-from/what-we-hide-from.jpg' },
        { id: v1(), name: 'Stephen', avatar: 'https://s.rfi.fr/media/display/69e8bcce-1701-11ea-90d6-005056bf7c53/w:1280/p:1x1/stephen_hawking_0.jpg' },
        { id: v1(), name: 'Tyson', avatar: 'https://pbs.twimg.com/profile_images/74188698/NeilTysonOriginsA-Crop_400x400.jpg' }
    ]
}

export const dialogsReducer = (state: DialogsPagePropsType = initialState, action: ActionsType): DialogsPagePropsType => {
    let copyState = { ...state };
    switch (action.type) {
        case SEND_MESSAGE: {
            const newMessage: MessageType = {
                id: v1(),
                message: action.newMessageBody.trim(),
                time: `${new Date().getHours()}:${(new Date().getMinutes() < 10) ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`
            }
            if (newMessage.message !== '') {
                copyState = { ...state, messages: [...state.messages, newMessage] }
            }
            return copyState
        }
        default:
            return state
    }
}

export const SendMessageActionCreator = (newMessageBody: string): SendMessageActionType => {
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer