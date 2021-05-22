import React from 'react';
import {connect} from 'react-redux';
import {followAC, InitialStateTypeToUsers, setUsersAC, unfollowAC, UserType} from '../../redux/users-reducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../../redux/redux-store';
import {Users1} from './UsersComponent';

type MapStatePropsType = {
    usersData: InitialStateTypeToUsers
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersData: state.usersData
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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
    }
}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users1);

export default UsersContainer