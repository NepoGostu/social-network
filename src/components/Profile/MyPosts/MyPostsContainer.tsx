import React, {ChangeEvent} from 'react';
import {ActionsTypes, PostsType, StoryType} from '../../../redux/store';
import {addPostAC} from '../../../redux/profile-reducer';
import {updateNewMessageBodyAC} from '../../../redux/dialogs-reducer';
import MyPosts from './MyPosts';

export type MyPostsType = {
    dispatch: (action: ActionsTypes) => void
    store: StoryType
}

const MyPostsContainer = (props: MyPostsType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC(state.profileData.newPostText))
    }
    let onPostChange = (text: string) => {
        let action = updateNewMessageBodyAC(text);
        props.store.dispatch(action)
    }
    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={addPost}
                 posts={state.profileData.posts}
                 newPostText={state.profileData.newPostText}
        />
    )
}

export default MyPostsContainer;