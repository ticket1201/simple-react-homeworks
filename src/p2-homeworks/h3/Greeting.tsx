import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (event: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.input; // need to fix with (?:)

    return (
        <div className={s.hw3}>
            <input value={name} onChange={setNameCallback} className={inputClass}/>
            <button className={s.button} onClick={addUser}>add</button>
            <span className={s.total}>Total users: {totalUsers}</span>
            <span className={s.errorText}>{error}</span>
        </div>
    )
}

export default Greeting
