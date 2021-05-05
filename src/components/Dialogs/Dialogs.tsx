import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {
    ActionsTypes, dialogsDataType,
    DialogsType,
    MessageType
} from '../../redux/store';
import DialogItem from './DialogItem/DialoItems';
import Message from './Message/Message';
import {sendMessageAC, updateNewMessageBodyAC} from '../../redux/dialogs-reducer';
import store from '../../redux/redux-store';


type DialogsPropsType = {
    updateNewMessageBody: (text: string) => void
    sendMessage: () => void
    dialogsData: dialogsDataType
}


const Dialogs = (props: DialogsPropsType) => {
    let state = props.dialogsData;

    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} id={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
        // props.store.dispatch(sendMessageAC());
        // props.dispatch(sendMessageAC(props.newMessageBody))
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
        /*props.store.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', newMessage: e.currentTarget.value})*/
        // props.store.dispatch(updateNewMessageBodyAC(body))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div> {messageElements}</div>
                <div>
                    <div><textarea
                        value={props.dialogsData.newMessageBody}
                        placeholder='Enter your message'
                        onChange={onNewMessageChange}
                    ></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs

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
