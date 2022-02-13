import { combineReducers } from "redux";
import lastUpdateReducer from "./lastUpdateReducer";
import pastesReducer from "./pastesReducer";

export default combineReducers({
    pastesReducer, lastUpdateReducer
})