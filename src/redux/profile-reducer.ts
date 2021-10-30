import {ActionsTypes,} from './store';
import {UsersLocationType} from './users-reducer';
import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';

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
    status: string
}

let initialState: InitialStateTypeToPosts = {
    posts: [
        {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
        {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
    ],
    newPostText: '',
    profile: null,
    status: ''
};

const ADD_POST = 'ADD-POST';
const SET_USERS_PROFILE = 'SET-USERS-PROFILE';
const SET_STATUS = 'SET-STATUS'
const DELETE_POST = 'DELETE-POST'

const profileReducer = (state: InitialStateTypeToPosts = initialState, action: ActionsTypes): InitialStateTypeToPosts => {
    switch (action.type) {
        case DELETE_POST: {
            return {...state, posts: state.posts.filter(p => p.id !=action.postId)

            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case ADD_POST: {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
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

export const deletePost = (postId: number) => {
    return {
        type: DELETE_POST,
        postId
    } as const
}

export const addPostAC = (newPostText: any) => { // todo lsn 76 typeof
    return {
        type: ADD_POST,
        newPostText
    } as const
}
export const setUserProfile = (profile: ProfileType) => {
    return {
        type: SET_USERS_PROFILE,
        profile: profile
    } as const
}
export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status: status,
    } as const
}

export const getStatus = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileAPI.updateStatus(status)

            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
}

export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let response = await profileAPI.getProfile(userId)
            dispatch(setUserProfile(response.data))
}

export default profileReducer;

