import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {
    ActionsTypes,
    DialogsType,
    MessageType, StoryType
} from '../../redux/store';
import DialogItem from './DialogItem/DialoItems';
import Message from './Message/Message';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import store from '../../redux/redux-store';
import Dialogs from './Dialogs';


type DialogsPropsType = {
    // messageData: MessageType[]
    // dialogsData: DialogsType[]
    // newMessageBody: string
    dispatch: (action: ActionsTypes) => void
    store: StoryType
}


const DialogsContainer = (props: DialogsPropsType) => {
    let dialogsData = store.getState().dialogsData;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC())
    }

    let onNewMessageChange = (body: string ) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }
        return (
            <Dialogs
                updateNewMessageBody={onNewMessageChange}
                sendMessage={onSendMessageClick}
                dialogsData={dialogsData}
            />
        )

}

export default DialogsContainer;

//todo:  вынести в отдельный файл
/*  const DialogItem = (props: DialogsType) => {
      let path = '/dialogs/' + props.id;
      return <div className={`${s.dialog} ${s.active}`}>
          <NavLink to={path}>{props.name}</NavLink>
      </div>
  }

  const Message = (props: MessageType) => {
      return <div className={s.dialog}>{props.message}</div>
  }
}*/
