import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type ProfilePropsType = {
    profile: ProfileType | null
    // todo 71 lsn
    // editMode: boolean,
    // title: string,
    // status: any
}

const Profile = (props: ProfilePropsType) => {
    console.log("Profile")
    return (
        <div>
            <ProfileInfo // todo 71 lsn
                profile = {props.profile}
                // title={props.title}
                // editMode={props.editMode}
                // status={props.status}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;