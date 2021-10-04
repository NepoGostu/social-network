import {compose, Dispatch} from 'redux';
import {InitialStateType, sendMessageAC} from '../../redux/dialogs-reducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import React, {ComponentType} from 'react';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

type MapStatePropsType = {
    dialogsData: InitialStateType
    isAuth: boolean
}
type MapDispatchPropsType = {
    // updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
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
       /* updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },*/
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageAC(newMessageBody))
        }
    }
}

export default compose<ComponentType>(
    withAuthRedirect,
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        mapDispatchToProps
    ))
(Dialogs)

