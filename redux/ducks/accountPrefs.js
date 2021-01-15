const DARK_MODE = "dark_mode"
const RESET = "reset"
export function darkModeFunction(){
    return {type:DARK_MODE}
}

export function reset(){
    return {type:RESET}
}

const initialState = {
    darkMode:false,
}



export default function darkModeReducer(state = initialState, action){
    switch(action.type){
        case DARK_MODE:
            return {...state, darkMode:!state.darkMode}
        case RESET:
            return{...state, darkMode:false}
        default:
            return state
    }
}