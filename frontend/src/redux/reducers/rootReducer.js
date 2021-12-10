import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariosReducer from "./itinerariosReducer"
import authReducer from './authReducer'

const rootReducer=combineReducers({
    cityReducer:citiesReducer,
    itinerariosReducer:itinerariosReducer,
    authReducer:authReducer

})
export default rootReducer