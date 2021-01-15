const DARK_MODE = "dark_mode"

export function darkModeFunction(){
    return {type:DARK_MODE}
}

const initialState = {
    darkMode:false,
}

const reset = {
    darkMode:false,
}

export default function darkModeReducer(state = initialState, action){
    switch(action.type){
        case DARK_MODE:
            return {...state, darkMode:!state.darkMode}
        default:
            return state
    }
}