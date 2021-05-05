import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {PostsType} from '../../../redux/store';

export type MyPostsType = {
    posts: PostsType[]
    newPostText: string
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsType) => {

    let postElements = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}

    />);

    // let newPostElement = React.createRef();

    const onAddPost = () => {
        props.addPost();
        // props.dispatch(addPostAC(props.newPostText)) // 43 dell
    }
    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value; // 43 wtf
       /* let action = updateNewMessageBodyAC(text)// 43 wtf
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText:e.currentTarget.value})*/
        props.updateNewPostText(text);
    }
    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={(e)=> onPostChange}
                              value={props.newPostText}
                              // ref = {newPostElement}// 43 wtf
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