import {ActionsTypes, PostsType, proFileDataType} from './state';

const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state: proFileDataType, action: ActionsTypes): proFileDataType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            // state._onChange();
            return state;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostText = action.newText;
            // state._onChange();
            return state;
        default :
            return state;
    }
}

export const addPostAC = (newPostText: string) => {
    return {
        type: 'ADD-POST',
        newPostText: newPostText
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}

export default profileReducer;

