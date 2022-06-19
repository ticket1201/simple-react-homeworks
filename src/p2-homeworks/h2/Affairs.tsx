import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter:FilterType)=>void
    deleteAffairCallback: (_id:number)=>void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}

    return (
        <div className={s.wrapper}>

            {mappedAffairs}
            <div className={s.buttonWrapper}>
                <SuperButton className={s.button} onClick={setAll} children={"All"}/>
                <SuperButton className={s.button} onClick={setHigh} children={"High"}/>
                <SuperButton className={s.button} onClick={setMiddle} children={"Middle"}/>
                <SuperButton className={s.button} onClick={setLow} children={"Low"}/>
            </div>

        </div>
    )
}

export default Affairs
