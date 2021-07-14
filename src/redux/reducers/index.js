import { combineReducers } from "redux";
import reducer1 from "./reducer1";
import reducer2 from "./reducer2";
import userReducer from "./userReducer";
import questionReducer from './questionReducer'

export const RootReducer = combineReducers({
    questionReducer: questionReducer,
    userReducer: userReducer,
    reducer1: reducer1,
    reducer2: reducer2,
});