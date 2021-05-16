import {ActionsTypes,} from './store';

let initialState: InitialStateTypeToUsers = {
    users: []
}
export type InitialStateTypeToUsers = {
    users: UserType[]
}
export type UsersLocationType = {
    city: string
    country: string
}
export type UserType = {

    id: number
    followed: boolean
    name: string
    status: string
    location: UsersLocationType
    photos: {
        small: string | null
        large: string  | null
    }

}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const usersReducer = (state: InitialStateTypeToUsers = initialState, action: ActionsTypes): InitialStateTypeToUsers => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users}
        }
        default :
            return state;
    }
}

export const followAC = (userId: number) => {
    return {
        type: FOLLOW,
        userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: UNFOLLOW,
        userId
    } as const
}
export const setUsersAC = (users: UserType[]) => {
    return {
        type: SET_USERS,
        users
    } as const
}

export default usersReducer;

