import {addPostAC, PostsType} from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/redux-store';
import {Dispatch} from 'redux';

type MapStatePropsType = {
    posts: Array<PostsType>
    newPostText: string
}
type MapDispatchPropsType = {
    // updateNewPostText: (text: string) => void
    addPost: any
}

export type MyPostPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profileData.posts,
        newPostText: state.profileData.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        /*updateNewPostText: (text: string) => {
            let action = changeNewTextAC(text);
            dispatch(action);
        },*/
        addPost: (newPostText: any) => { // todo lsn 76 typeof
            dispatch(addPostAC(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;