import React from 'react';


import styles from './Message.module.css';
import {MessageType} from '../../../outside/dialogs-reducer';

const Message = (props: MessageType) => {
    return (
        <div className={(props.message === 'Sir, when will you grab your head and start doing really sensible things but not this social network?I certainly understand that all great minds started with something, but you have already gone 4 dozen years.I\'m sure great things await you') ? styles.message : styles.myMessage}>
            {props.message}
            <div className={styles.messageTime}>
                {props.time}
            </div>
        </div>
    )
}

export default Message