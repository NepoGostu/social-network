import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialoItems';
import Message from './Message/Message';
import {DialogPropsType} from './DialogsContainer';
import {AddMessageFormRedux} from './Message/AddMessageForm';


const Dialogs = (props: DialogPropsType) => {
    let state = props.dialogsData;
    let dialogElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id} id={m.id}/>)
    let newMessageBody = state.newMessageBody
    let addNewMessage = (values: any) => {  // todo lsn 76 typeof
        props.sendMessage(newMessageBody)
    }
    // todo lsn 78 didnt work not yet
    /* if (!props.isAuth) {
         return <Redirect to={'/login'}/>
     }*/

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div> {messageElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

export default Dialogs
