import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {PostsType} from '../../redux/state';


export type ProfilePropsType = {
    posts: PostsType[]
    addPostCallback: () => void
    newPostText: string
    updateNewPostText: (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     addPostCallback={props.addPostCallback}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;