import { combineReducers, createStore } from "redux";
import blogAuthReducer from "./ducks/blogAuth";

const reducer = combineReducers({
    auth:blogAuthReducer,
    //can add more reducer here
})
const store = createStore(reducer);
export default store;

