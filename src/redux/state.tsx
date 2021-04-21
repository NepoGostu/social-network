

export type StoryType = {
    _state: StateType
    updateNewPostText: (newText: string) => void
    // addPostCallback: (postText: string) => void
    addPost: () => void
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => StateType
}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type sidebarType = {
    id: number
    name: string
}
export type proFileDataType = {
    posts: Array<PostsType>
    newPostText: string
}
export type dialogsDataType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type sidebarDataType = {
    friends: Array<sidebarType>
}
export type StateType = {
    profileData: proFileDataType
    dialogsData: dialogsDataType
    sidebarData: sidebarDataType
}

const store: StoryType = {
    _state: {
        profileData: {
            posts: [
                {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
                {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
            ],
            newPostText: ''
        },
        dialogsData: {
            dialogs: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra'}
            ]
        },
        sidebarData: {
            friends: [
                {id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'}
            ]
        }
    },
   /* addPostCallback (postText: string) {
        this._state.profileData.newPostText = postText;
        this._onChange();
    },*/
    updateNewPostText (newText: string) {
        this._state.profileData.newPostText = newText;
        this._onChange();
    },
    addPost ()  {  // postText: string
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: this._state.profileData.newPostText,
            likesCount: 0
        };
        this._state.profileData.posts.push(newPost);
        this._state.profileData.newPostText = '';
        this._onChange();
    },
     _onChange ()  {
        console.log('State has been changed')
    },
    subscribe (observer)  {
        this._onChange = observer
    },
    getState() {
        return this._state
    }

}

// window.state = state;


export default store