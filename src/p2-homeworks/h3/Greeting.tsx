import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';

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
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass} error={error} spanClassName={s.errorText} onEnter={addUser}/>
            <SuperButton className={s.button} onClick={addUser} children={'add'}/>
            <span className={s.total}>Total users: {totalUsers}</span>
        </div>
    )
}

export default Greeting
