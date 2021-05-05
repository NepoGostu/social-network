import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostsType, StoryType} from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';


export type ProfilePropsType = {
    dispatch: (action: ActionsTypes) => void
    store: StoryType
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store ={props.store} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;