import React from 'react'
import {NavLink} from 'react-router-dom';
import s from './Header.module.css'


function Header() {
    return (
        <div className={s.wrapper}>
           <div className={s.container}>
               <NavLink className={({isActive})=> isActive ? `${s.links} ${s.active}` : `${s.links}`} to={'/pre-junior'}>PreJunior</NavLink>
               <NavLink className={({isActive})=> isActive ? `${s.links} ${s.active}` : `${s.links}`} to={'/junior'}>Junior</NavLink>
               <NavLink className={({isActive})=> isActive ? `${s.links} ${s.active}` : `${s.links}`} to={'/pre-junior-plus'}>Junior+</NavLink>
           </div>
           <div className={s.colorBox}></div>
        </div>
    )
}

export default Header
