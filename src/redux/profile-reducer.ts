import {ActionsTypes,} from './store';

let initialState: InitialStateTypeToPosts = {
    posts: [
        {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
        {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
    ],
    newPostText: ''
};
export type PostsType = {

    id: number
    message: string
    likesCount: number

}
export type InitialStateTypeToPosts = {
    posts: Array<PostsType>
    newPostText: string
}

/*const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';*/

const profileReducer = (state: InitialStateTypeToPosts = initialState, action: ActionsTypes): InitialStateTypeToPosts => {

    switch (action.type) {
        case 'ADD-POST': {
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
            /* let stateCopy = {...state}
            stateCopy.posts = {...state.posts}
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''*/
            // return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            return {
                ...state,
                newPostText: action.newText
            };
            /*stateCopy.newPostText = action.newText;
            return stateCopy;*/
        }
        default :
            return state;
    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST',
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer;

