import React from 'react'
import {Navigate, Route, Routes} from 'react-router-dom';
import PreJunior from '../h5/pages/PreJunior';
import Error404 from '../h5/pages/Error404';
import PreJuniorPlus from './pages/PreJuniorPlus';
import Junior from './pages/Junior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    PRE_JUNIOR_PLUS: '/pre-junior-plus',
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.PRE_JUNIOR_PLUS} element={<PreJuniorPlus/>}/>

                // add routes

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
