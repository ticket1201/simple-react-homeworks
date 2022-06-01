import React from 'react'
// import {inspect} from 'util';
import styles from './Message.module.css'

export type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}


function Message(props: messageDataType) {
    return (
        <div className={styles.message}>
            <img src={props.avatar} alt="Ava"/>
            <div className={styles.pop}>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.text}>{props.message}</p>
                <p className={styles.time}>{props.time}</p>
            </div>
        </div>
    )
}

export default Message
