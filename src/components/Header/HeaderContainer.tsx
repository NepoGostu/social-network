import React from 'react';
import Header from './Header';
import axios from 'axios';
import {connect} from 'react-redux';
import {InitialStateTypeAuth, setAuthUserData} from '../../redux/auth-reducer';
import {AppStateType} from '../../redux/redux-store';
import {authAPI} from '../../api/api';

type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}
type MapDispatchPropsType = {
    setAuthUserData: (authData: InitialStateTypeAuth) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
        authAPI.me().then(response => {
                if (response.data.resultCode === 0) {
                    let {id: userID, email, login} = response.data.data
                    this.props.setAuthUserData({userID, email, login, isAuth: true})
                }
            })
    }

    render() {
        return <Header
            {...this.props}
            isAuth={this.props.isAuth}
            login={this.props.login}
        />
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);