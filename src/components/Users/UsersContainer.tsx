import React from 'react';
import {connect} from 'react-redux';
import {
    follow, FollowingInProgressType,
    InitialStateTypeToUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {getUsers, usersAPI} from '../../api/api';

// type MapStatePropsType = {
//     usersData: InitialStateTypeToUsers,
// }
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingInProgress:  (isFetching: boolean, userId: number) => void
    followingInProgress: Array<FollowingInProgressType>
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount () {
        this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.usersData.currentPage, this.props.usersData.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.items)
                this.props.setTotalUsersCount(response.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(pageNumber, this.props.usersData.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <>
            {this.props.usersData.isFetching ?
                <Preloader/>
                : null}
            <Users setTotalUsersCount={this.props.setTotalUsersCount}
                   onPageChanged={this.onPageChanged}
                   setUsers={this.props.setUsers}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   setCurrentPage={this.props.setCurrentPage}
                   usersData={this.props.usersData}
                   toggleIsFetching={this.props.toggleIsFetching}
                   toggleFollowingInProgress = {this.props.toggleFollowingInProgress}
                   followingInProgress = {this.props.followingInProgress}
                   currentPage={this.props.currentPage}
                   isFetching={this.props.isFetching}
                   totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
            />
        </>
    }
}

type MapStatePropsType = {
    usersData: InitialStateTypeToUsers
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<FollowingInProgressType>
}

let mapStateToProps = (state: AppStateType):MapStatePropsType  => {
    return {
        usersData: state.usersData,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        totalUsersCount: state.usersData.totalUsersCount,
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingInProgress
})(UsersContainer);

