import {ActionsTypes,} from './store';

let initialState: InitialStateTypeToUsers = {
    users: [],
    pageSize: 5,
    totalUsersCount: 54,
    currentPage: 1,
    // totalCount: 54
}
export type InitialStateTypeToUsers = {
    users: UserType[],
    pageSize: number,
    totalUsersCount: number
    currentPage: number,
    // totalCount: number
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
        large: string | null
    }

}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';

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
            return {...state, users: action.users}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount}
        }
        default:
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
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
}// todo какая то шляпа с типизацией 55lsn
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount
    } as const
}// todo type for totalCount

export default usersReducer;

