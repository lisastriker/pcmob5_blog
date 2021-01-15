import { combineReducers, createStore } from "redux";
import blogAuthReducer from "./ducks/blogAuth";
import darkModeReducer from "./ducks/accountPrefs";
const reducer = combineReducers({
    auth:blogAuthReducer,
    pref:darkModeReducer,
    //can add more reducer here
})
const store = createStore(reducer);
export default store;

