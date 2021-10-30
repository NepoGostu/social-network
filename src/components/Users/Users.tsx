import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';
import {FollowingInProgressType, UserType} from '../../redux/users-reducer';

type  PropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    onPageChanged: (pageNumber: number) => void
    totalUsersCount: number
    currentPage: number
    pageSize: number,
    users: UserType[]
    followingInProgress: Array<FollowingInProgressType>
}
let Users = ({
                 currentPage,
                 onPageChanged,
                 totalUsersCount,
                 pageSize,
                 users,
                 followingInProgress,
                 follow,
                 unfollow
             }: PropsType) => {

    return (
        <div>
            <Paginator
                currentPage={currentPage}
                onPageChanged={onPageChanged}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
            />
            <div>
                {
                    users.map(u => (
                            <User user={u}
                                  key={u.id}
                                  followingInProgress={followingInProgress}
                                  follow={follow}
                                  unfollow={unfollow}

                            />
                        )
                    )
                }
            </div>
        </div>
    )
}


export default Users