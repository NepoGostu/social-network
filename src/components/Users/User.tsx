import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assest/image/78-786207_user-avatar-png-user-avatar-icon-png-transparent.jpg';
import {NavLink} from 'react-router-dom';
import {FollowingInProgressType, UserType} from '../../redux/users-reducer';

/*type  PropsType = {
    onPageChanged: (pageNumber: number) => void
}*/

type UserPropsType = {// todo lsn 90 wtf typeof
    user: UserType
    unfollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<FollowingInProgressType>
}
let User = ({user, unfollow, follow, followingInProgress}: UserPropsType) => {
    return <div>
        <span>
            <div>
                <NavLink to={'/profile/' + user.id}>
                      <img src={user.photos.small ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                </NavLink>
            </div>
            <div>
                {user.followed
                    ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        unfollow(user.id)
                    }}>Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                        follow(user.id)
                    }}>Follow</button>}
            </div>

        </span>
        <span>
<span>
    <div>{user.name}</div><div>{user.status}</div>
</span>
<span>
    <div>{'user.location.country'}</div>
    <div>{'user.location.city'}</div>
</span>
        </span>
    </div>
}


export default User