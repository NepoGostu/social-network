import React, {ComponentType} from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {compose} from 'redux';


type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
// type MapDispatchPropsType = {
//     // getAuthUserData: () => void
//     logout: () => void
// }

export type authOwnPropsType = {
    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & authOwnPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {



    render() {
        return <Header
            {...this.props}
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default compose<ComponentType>(connect(
    mapStateToProps,
    {logout}))// todo lsn 78 typeof
(HeaderContainer);