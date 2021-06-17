import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

export type MenuItemType = {
    to: string,
    title: string
    id: number
}

const App = () => {

    const menuItems: Array<MenuItemType> = [
        {id: 1, to: '/profile', title: 'Profile'},
        {id: 2, to: '/dialog', title: 'Messages'},
        {id: 3, to: '/users', title: 'Users'},
        {id: 4, to: '/news', title: 'News'},
        {id: 5, to: '/music', title: 'Music'},
        {id: 6, to: '/settings', title: 'Settings'},


    ]


    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar menuItems={menuItems}/>
                <div className='app-wrapper-content'>
                    <Route exact path='/profile' render={() => <ProfileContainer/>}/>
                    <Route exact path='/dialog' render={() => <DialogsContainer/>}/>
                    <Route exact path='/news' render={() => <News/>}/>
                    <Route exact path='/music' render={() => <Music/>}/>
                    <Route exact path='/settings' render={() => <Settings/>}/>
                    <Route exact path='/users' render={() => <UsersContainer/>}/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
