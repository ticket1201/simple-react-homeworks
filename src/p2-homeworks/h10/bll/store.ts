import {loadingReducer} from './loadingReducer'
import {combineReducers, createStore} from 'redux';

export const reducers = combineReducers({
    loading: loadingReducer,
})

const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>
//
// // @ts-ignore
// window.store = store // for dev
