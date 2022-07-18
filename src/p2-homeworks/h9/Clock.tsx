import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date && `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`// fix with date
    const stringDate = date && `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}` // fix with date

    return (
        <div className={s.wrapper}>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={s.time}
            >
                {stringTime}
            </div>

            {show && (
                <div className={s.date}>
                    {stringDate}
                </div>
            )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
