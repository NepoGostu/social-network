import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    InitialStateTypeToUsers,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow,
    UserType
} from '../../redux/users-reducer';
import {AppStateType} from '../../redux/redux-store';
import axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';

type MapStatePropsType = {
    usersData: InitialStateTypeToUsers,
}
type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (pageNumber: number) => void
    toggleIsFetching: (isFetching: boolean) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

export class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.usersData.currentPage}&count=${this.props.usersData.pageSize}`, {
            withCredentials: true
        })

            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersData.pageSize}`,
            {
                withCredentials: true
            })
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


            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): {
    usersData: InitialStateTypeToUsers
    pageSize: number
    currentPage: number
    totalUsersCount: number
    isFetching: boolean
} => {
    return {
        usersData: state.usersData,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        totalUsersCount: state.usersData.totalUsersCount,
        isFetching: state.usersData.isFetching
    }
}

export default connect(mapStateToProps, {
    follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching
})(UsersContainer);

