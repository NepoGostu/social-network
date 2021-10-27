import profileReducer, {addPostAC, deletePost} from './profile-reducer';


it('length od post should be incremented', () => {
    // 1. test data
    let action = addPostAC('it-kamasutra.com')
    let state = {
        posts: [
            {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
            {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
        ],
    };

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect (newState.posts.length).toBe (3)
})

it('message of new post should be correct', () => {
    // 1. test data
    let action = addPostAC('it-kamasutra.com')
    let state = {
        posts: [
            {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
            {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
        ],
    };

    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts[2].message).toBe('it-kamasutra.com')
})

it('after deleting length of message should be decrement', () => {
    // 1. test data
    let action = deletePost(1)
    let state = {
        posts: [
            {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
            {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
        ],
    };
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(1)
})

it('after deleting length should be decrement if id is correct', () => {
    // 1. test data
    let action = deletePost(1000)
    let state = {
        posts: [
            {id: 1, message: 'Hi,my name is Andrey', likesCount: 12},
            {id: 2, message: 'Yo,kabzda kak easy', likesCount: 11},
        ],
    };
    //2. action
    let newState = profileReducer(state, action)

    //3. expectation
    expect(newState.posts.length).toBe(2)
})

