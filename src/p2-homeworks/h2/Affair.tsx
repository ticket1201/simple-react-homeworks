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

    const setStylePriority = () => {
        switch (props.affair.priority) {
            case 'low':
                return s.nameLow
            case 'middle':
                return s.nameMiddle
            case 'high':
                return s.nameHigh
        }
    }

    return (
        <div className={s.affair}>
            <div className={s.name}>{props.affair.name}</div>
            <div className={s.affairPriority + ' ' + setStylePriority()}>{props.affair.priority}</div>

            <button className={s.affairButton} onClick={() => deleteCallback(props.affair._id)}>X</button>
        </div>
    )
}

export default Affair
