import React, {ComponentType} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import {AppStateType} from './redux/redux-store';

type MapStateToPropsType = {
    initialized: boolean
}

type MapDispatchToPropsType = {
    initializeApp: () => void
}

type AllType = MapStateToPropsType & MapDispatchToPropsType

export type MenuItemType = {
    to: string,
    title: string
    id: number
}

class App extends React.Component<AllType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        const menuItems: Array<MenuItemType> = [
            {id: 1, to: '/profile', title: 'Profile'},
            {id: 2, to: '/dialog', title: 'Messages'},
            {id: 3, to: '/users', title: 'Users'},
            {id: 4, to: '/news', title: 'News'},
            {id: 5, to: '/music', title: 'Music'},
            {id: 6, to: '/settings', title: 'Settings'},
        ]

        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar menuItems={menuItems}/>
                <div className="app-wrapper-content">
                    <Route exact path="/profile/:id?" render={() => <ProfileContainer/>}/>
                    <Route exact path="/dialog" render={() => <DialogsContainer/>}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                    <Route exact path="/settings" render={() => <Settings/>}/>
                    <Route exact path="/users" render={() => <UsersContainer/>}/>
                    <Route exact path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): any => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter)(App);