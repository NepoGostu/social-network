import {ActionsTypes,} from './store';
import {UsersLocationType} from './users-reducer';

let initialState: InitialStateTypeToPosts = {
    posts: [
        {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
        {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
    ],
    newPostText: '',
    profile: null
};

export type ProfileType = {

    id: number
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
    photos: {
        small: string | null
        large: string | null
    }

}
export type PostsType = {

    id: number
    message: string
    likesCount: number

}
export type InitialStateTypeToPosts = {
    posts: Array<PostsType>
    newPostText: string
    profile: null | ProfileType
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';

const profileReducer = (state: InitialStateTypeToPosts = initialState, action: ActionsTypes): InitialStateTypeToPosts => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default :
            return state;
    }
}


export const addPostAC = () => {
    return {
        type: ADD_POST,
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    } as const
}

export default profileReducer;

