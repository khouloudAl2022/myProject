import { combineReducers } from "redux";
import userReducer from "./userReducer";
import alertReducer from "./alertReducer";
const rootReducers = combineReducers({ userReducer, alertReducer });
export default rootReducers;
