import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostPropsType} from './MyPostsContainer';
import {PostsType} from '../../../redux/profile-reducer';

export type MyPostsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}


const MyPosts = (props: MyPostPropsType) => {

    const postElements = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />);

    const onAddPost = () => {
        props.addPost();
    }
    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value; // 43 wtf
        props.updateNewPostText(text);
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
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;