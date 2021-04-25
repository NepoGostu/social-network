import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import {ActionsTypes, PostsType} from '../../redux/state';


export type ProfilePropsType = {
    posts: PostsType[]
    // addPostCallback: () => void
    newPostText: string
    // updateNewPostText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

}

const Profile = (props: ProfilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                     newPostText={props.newPostText}
                     // addPostCallback={props.addPostCallback}
                     dispatch={props.dispatch}
                     // updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}

export default Profile;