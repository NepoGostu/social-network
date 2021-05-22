import React from 'react';
import userPhoto from '../../assest/image/78-786207_user-avatar-png-user-avatar-icon-png-transparent.jpg';
import styles from './Users.module.css';
import axios from 'axios';
import {UsersPropsType} from './UsersContainer';

export class Users1 extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return <div>
            {
                this.props.usersData.users.map(u => <div key={u.id}>
        <span>
            <div>
                <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
            </div>
            <div>
                {u.followed
                    ? <button onClick={() => {
                        this.props.follow(u.id)
                    }}>Unfollow</button>
                    : <button onClick={() => {
                        this.props.unfollow(u.id)
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
}
