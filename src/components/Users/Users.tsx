import React from 'react';
import styles from './Users.module.css';
import {UsersPropsType} from './UsersContainer';

let Users = (props:UsersPropsType) => {

if (props.usersData.users.length === 0) {
    props.setUsers([
            {
                id: 1,
                photoUrl: 'https://icon-library.net/images/male-avatar-icon/male-avatar-icon-13.jpg',
                followed: false,
                fullName: 'Andrei',
                status: 'Big Brother watching you',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://img2.pngio.com/avatar-female-person-user-woman-young-icon-female-avatar-png-512_512.png',
                followed: true,
                fullName: 'Kristina',
                status: 'Cool girl',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://icon-library.net/images/male-avatar-icon/male-avatar-icon-12.jpg',
                followed: false,
                fullName: 'Antonio',
                status: 'Muchachos',
                location: {city: 'Moscow', country: 'Russia'}
            }
        ]
    )
}

    return <div>
        {
            props.usersData.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photoUrl} className={styles.userPhoto}/>
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
    <div>{u.fullName}</div><div>{u.status}</div>
</span>
<span>
    <div>{u.location.country}</div>
    <div>{u.location.city}</div>
</span>
        </span>
            </div>)
        }
    </div>
}

export default Users;