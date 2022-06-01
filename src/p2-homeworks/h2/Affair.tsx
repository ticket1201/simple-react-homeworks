import React from 'react'
import {AffairType} from './HW2';
import s from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id)
    }// need to fix

    return (
        <div className={s.affair}>
            <div>{props.affair.name}</div>
            <div>{props.affair.priority}</div>

            <button onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
