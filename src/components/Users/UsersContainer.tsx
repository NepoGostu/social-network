import React from 'react';
import {connect} from 'react-redux';
import {
    followAC,
    InitialStateTypeToUsers,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
    UserType
} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {Users1} from './UsersComponent';

type MapStatePropsType = {
    usersData: InitialStateTypeToUsers,
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
   /* currentPage: (currentPage: number) => void*/
   /* totalUsersCount: (totalUsersCount: number) => void*/
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): {
    usersData: InitialStateTypeToUsers
    pageSize: number
    currentPage: number
    totalUsersCount: number
} => {
    return {
        usersData: state.usersData,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        totalUsersCount: state.usersData.totalUsersCount
    }
}

let mapDispatchToProps = (dispatch: Dispatch): {
    setUsers: (users: UserType[]) => void;
    setCurrentPage: (pageNumber: number) => void;
    follow: (userId: number) => void;
    unfollow: (userId: number) => void;
    setTotalUsersCount: (totalCount: number) => void
} => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: UserType[]) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount: number) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        },
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users1);

export default UsersContainer