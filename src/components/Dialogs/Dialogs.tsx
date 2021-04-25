import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {
    ActionsTypes,
    DialogsType,
    MessageType,
    sendMessageAC,
} from '../../redux/state';
import DialogItem from './DialogItem/DialoItems';
import Message from './Message/Message';


type DialogsPropsType = {
    messageData: MessageType[]
    dialogsData: DialogsType[]
    newMessageBody: string
    dispatch: (action: ActionsTypes) => void

}


const Dialogs = (props: DialogsPropsType) => {

    let dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messageData.map(m => <Message message={m.message} id={m.id}/>)

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC(props.newMessageBody))
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: 'UPDATE-NEW-MESSAGE-BODY', newMessage: e.currentTarget.value})
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
                            value={props.newMessageBody}
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
