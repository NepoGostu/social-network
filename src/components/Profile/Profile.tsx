import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {ProfileType} from '../../redux/profile-reducer';

export type ProfilePropsType = {// todo wtf typeof
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo
                isOwner = {props.isOwner}
                profile = {props.profile}
                status = {props.status}
                updateStatus = {props.updateStatus}
                savePhoto = {props.savePhoto}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile;