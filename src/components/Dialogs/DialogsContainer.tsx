import {Dispatch} from 'redux';
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import React from 'react';
import {ProfilePropsType} from '../Profile/ProfileContainer';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStatePropsType = {
    dialogsData: InitialStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsData: state.dialogsData,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC(

            ))
        }
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

/*let AuthRedirectComponent = (props: DialogPropsType) => {
    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
        return <Dialogs {...props}/>
    }
}*/

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;

