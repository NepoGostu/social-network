import {Redirect} from 'react-router-dom';
import React, {ComponentType} from 'react';
import {AppStateType} from '../redux/redux-store';
import {connect} from 'react-redux';


type mapStateToPropsForRedirectPT = {
    isAuth: boolean
}

let mapStateToPropsForRedirect = (state: AppStateType): mapStateToPropsForRedirectPT => ({
    isAuth: state.auth.isAuth
});

export function withAuthRedirect  <T>(Component: ComponentType<T>) {
    class RedirectComponent extends React.Component<mapStateToPropsForRedirectPT> {
        render () {
            let {isAuth, ...resProps} = this.props
            if (!isAuth) return <Redirect to='/login'/>
            return <Component {...resProps as T}/>
        }
    }


    let ConnectAuthRedirectComponent = connect (mapStateToPropsForRedirect) (RedirectComponent);

    return  ConnectAuthRedirectComponent
}