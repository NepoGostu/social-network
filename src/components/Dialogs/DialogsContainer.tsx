import {Dispatch} from 'redux';
import {InitialStateType, sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import {AppStateType} from '../../redux/redux-store';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

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

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

