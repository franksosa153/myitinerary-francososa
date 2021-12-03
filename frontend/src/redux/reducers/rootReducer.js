import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";

const rootReducer=combineReducers({
    cityReducer:citiesReducer,
    
})
export default rootReducer