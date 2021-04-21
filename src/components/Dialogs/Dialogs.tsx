import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
import {DialogsType, MessageType} from '../../redux/state';

type DialogsPropsType = {
    messageData: MessageType[]
    dialogsData : DialogsType[]
}


const Dialogs = (props: DialogsPropsType) => {


    let dialogElements = props.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements = props.messageData.map(m => <Message message={m.message} id={m.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialogs;

// todo:  вынести в отдельный файл
const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id;
    return <div className={`${s.dialog} ${s.active}`}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props: MessageType) => {
    return <div className={s.dialog}>{props.message}</div>
}
