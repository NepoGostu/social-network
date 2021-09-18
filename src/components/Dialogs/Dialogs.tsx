import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialoItems';
import Message from './Message/Message';
import {DialogPropsType} from './DialogsContainer';
import {Redirect} from 'react-router-dom';

const Dialogs = (props: DialogPropsType) => {
    let state = props.dialogsData;
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key = {d.id} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} key = {m.id} id={m.id}/>)
    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value;
        props.updateNewMessageBody(body);
    }

    if(!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div> {messageElements}</div>
                <div>
                    <div>
                        <textarea
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
