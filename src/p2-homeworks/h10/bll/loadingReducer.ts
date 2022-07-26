export type initialStateType = {
    isLoading : boolean
}

export type loadingACType = {
    type: 'TOGGLE_LOADING'
    isLoading : boolean
}

const initState = {
    isLoading: false
}


export const loadingReducer = (state:initialStateType = initState, action: loadingACType): initialStateType => {
    switch (action.type) {
        case 'TOGGLE_LOADING': {
            return {...state, isLoading : action.isLoading}
        }
        default: return state
    }
}



export const loadingAC = (isLoading:boolean): loadingACType => {
    return{
        type:'TOGGLE_LOADING',
        isLoading
    }
}