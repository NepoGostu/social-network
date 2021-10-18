import {AppStateType} from './redux-store';
import {createSelector} from 'reselect';


export const getPageSize = (state: AppStateType) => {
    return state.usersData.pageSize
}
export const getCurrentPage = (state: AppStateType) => {
    return state.usersData.currentPage
}
export const getTotalUsersCount = (state: AppStateType) => {
    return state.usersData.totalUsersCount
}
export const getIsFetching = (state: AppStateType) => {
    return state.usersData.isFetching
}
export const getFollowingInProgress = (state: AppStateType) => {
    return state.usersData.followingInProgress
}
export const getUsers = (state: AppStateType) => {
    return state.usersData.getUsers
}
const getUsersData = (state: AppStateType) => {
    return state.usersData.users
}
const getUsersSelector = (state: AppStateType) => {
    return getUsersData(state).filter(u => true)
}
export const getUsersSuperSelector = createSelector (getUsersSelector, (users, ) => { // todo lsn 83 selector typeoff
    return users.filter(u => true)
})

export const countSomethingDifficult = () => {
    let count = 23
    return count
}
