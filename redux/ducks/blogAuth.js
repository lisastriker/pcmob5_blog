const SIGN_IN = "sign_in"
const SIGN_OUT = "sign_out" //These are action types. These will be logged later on

export function signInAction(){ 
    return { type: SIGN_IN };//Just an object with a type
}

export function signOutAction(){
    return { type: SIGN_OUT };
}

const initialState = {
    signedIn:false, 
    //somethingElse : true (like this so don't touch this)
};

export default function blogAuthReducer(state = initialState, action){
    switch (action.type){
        case SIGN_IN:
            return{...state, signedIn:true} //In case there are other values in the state, though none
        case SIGN_OUT:
            return{...state, signedIn:false}
        default:
            return state;    
    }
}
