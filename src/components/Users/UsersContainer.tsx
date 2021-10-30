import React, {ComponentType} from 'react';
import {connect} from 'react-redux';
import {
    follow,
    FollowingInProgressType,
    getUsersType,
    requestUsers,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {compose} from 'redux';
import {
    countSomethingDifficult,
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
    getUsersSuperSelector
} from '../../redux/users-selectors';

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void

}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        let {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader/>
                : null}
            <Users
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                // setCurrentPage={this.props.setCurrentPage}
                users={this.props.usersData}
                // toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                followingInProgress={this.props.followingInProgress}
                currentPage={this.props.currentPage}
                // isFetching={this.props.isFetching}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                // getUsers={this.props.getUsers}
                // countSomethingDifficult = {this.props.countSomethingDifficult}
            />
        </>
    }
}

type MapStatePropsType = {
    usersData: UserType[]
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
    followingInProgress: Array<FollowingInProgressType>
    getUsers: getUsersType[]
    countSomethingDifficult: number
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersData: getUsersSuperSelector(state), //todo lsn 83 selector
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        getUsers: getUsers(state),
        countSomethingDifficult: countSomethingDifficult()
    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingInProgress,
        getUsers: requestUsers
    }),
    // withAuthRedirect
)(UsersContainer)