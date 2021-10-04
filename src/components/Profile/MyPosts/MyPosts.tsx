import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';
import {MyPostPropsType} from './MyPostsContainer';
import {PostsType} from '../../../redux/profile-reducer';
import {Field, InjectedFormProps, reduxForm} from 'redux-form';

export type MyPostsType = {
    // posts: PostsType[]
    newPostText: string
    // updateNewPostText: (text: string) => void
    // addPost: () => void
    textarea: string
}


let AddNewPostForm: React.FC <InjectedFormProps<MyPostsType>> = (
    /*props: { onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, props: MyPostPropsType, onClick: () => void }*/
    props
) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name = 'newPostText' component = 'textarea'/>
                   {/* <textarea onChange={props.onChange}
                              value={props.props.newPostText}
                    />*/}
        </div>
        <div>
            <button
                // onClick={props.onClick}
            >Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm<MyPostsType> ({form: 'ProfileAddNewPostForm'}) (AddNewPostForm)

const MyPosts = (props: MyPostPropsType) => {
    const postElements = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />);

    const onAddPost = (values: any) => { // todo lsn 76 typeof
        props.addPost(values.newPostText);
    }
  /*  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value; // 43 wtf
        props.updateNewPostText(text);
    }*/

    // const AddNewPostForm = (props: any) => { // todo lsn 76 typeoff
    //   return  <AddNewPostForm onSubmit={onAddPost}/>
    // }

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostFormRedux onSubmit={onAddPost} />
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}

export default MyPosts;