import React, {ComponentType} from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route, withRouter} from 'react-router-dom';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {connect, Provider} from 'react-redux';
import {compose} from 'redux';
import {initializeApp} from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import store, {AppStateType} from './redux/redux-store';
import {
    withSuspenseForDialogsContainer,
    withSuspenseForProfileContainer,
    withSuspenseForUsersContainer
} from './hoc/withSuspense';


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

/*const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));*/


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
                    <Route exact path="/profile/:id?" render={() => withSuspenseForProfileContainer('ProfileContainer')}/>
                    <Route exact path="/dialog" render={() => withSuspenseForDialogsContainer('DialogsContainer')}/>
                    <Route exact path="/news" render={() => <News/>}/>
                    <Route exact path="/music" render={() => <Music/>}/>
                    <Route exact path="/settings" render={() => <Settings/>}/>
                    <Route exact path="/users" render={() => withSuspenseForUsersContainer('UsersContainer')}/>
                    <Route exact path="/login" render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

const AppContainer = compose<ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter)(App);

export const SamuraiJSApp = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}