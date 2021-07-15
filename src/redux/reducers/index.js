import { combineReducers } from "redux";
import userReducer from "./userReducer";
import questionReducer from './questionReducer'

export const RootReducer = combineReducers({
    questionReducer: questionReducer,
    userReducer: userReducer,
});