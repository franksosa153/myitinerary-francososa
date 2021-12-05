import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariosReducer from "./itinerariosReducer"

const rootReducer=combineReducers({
    cityReducer:citiesReducer,
    itinerariosReducer:itinerariosReducer
})
export default rootReducer