import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/state';

export type MyPostsType = {
    posts: PostsType[]
    addPostCallback: (postMessage: string) => void
    updateNewPostText: (newText: string) => void
    newPostText: string
}

const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}

    />);

    const addPost = () => {
        props.addPostCallback(props.newPostText)
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              value={props.newPostText}
                    />
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;