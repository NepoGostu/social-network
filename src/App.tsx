import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {ActionsTypes, StoryType} from './redux/store'
import DialogsContainer from './components/Dialogs/DialogsContainer';


export type MenuItemType = {
    to: string,
    title: string
    id: number
}

export type PropsType = {
    /* addPostCallback: () => void
     updateNewPostText: (newText: string) => void*/
    store: StoryType
    dispatch: (action: ActionsTypes) => void

}

const App: React.FC<PropsType> = (props: PropsType) => {
    const state = props.store.getState()

    const menuItems: Array<MenuItemType> = [
        {id: 1, to: '/profile', title: 'Profile'},
        {id: 2, to: '/dialog', title: 'Messages'},
        {id: 3, to: '/news', title: 'News'},
        {id: 4, to: '/music', title: 'Music'},
        {id: 5, to: '/settings', title: 'Settings'},
    ]


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar menuItems={menuItems}/>

                <div className='app-wrapper-content'>
                    <Route exact path='/profile'
                           render={() => <Profile store = {props.store} dispatch={props.dispatch}
                             /*  newPostText={state.profileData.newPostText}
                               posts={state.profileData.posts}
                               dispatch={props.store.dispatch.bind(props.store)}*/
                               // updateNewPostText={props.store.updateNewPostText.bind(props.store)}
                           />}/>
                    <Route exact path='/dialog'
                           render={() => <DialogsContainer store = {props.store} dispatch={props.dispatch}
                              /* messageData={state.dialogsData.messages}
                               dialogsData={state.dialogsData.dialogs}
                               dispatch={props.store.dispatch.bind(props.store)}
                           newMessageBody={state.dialogsData.newMessageBody}*/
                           />}
                    />
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/music' render={() => <Music/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}
export default App;
