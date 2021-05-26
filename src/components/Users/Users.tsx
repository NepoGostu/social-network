import React from 'react';
import styles from './Users.module.css';
import {UsersPropsType} from './UsersContainer';
import axios from 'axios';
import userPhoto from '../../assest/image/78-786207_user-avatar-png-user-avatar-icon-png-transparent.jpg'

let Users = (props: UsersPropsType) => {
    let getUsers = () => {
        if (props.usersData.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get users</button>
        {
            props.usersData.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        props.follow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        props.unfollow(u.id)
                    }}>Follow</button>}
            </div>
        </span>
                <span>
<span>
    <div>{u.name}</div><div>{u.status}</div>
</span>
<span>
    <div>{'u.location.country'}</div>
    <div>{'u.location.city'}</div>
</span>
        </span>
            </div>)
        }
    </div>
}

export default Users;