import { combineReducers } from "redux";
import CovidReducer from "./CovidReducer";
import GeneralReducer from './GeneralReducer'

export default combineReducers({
  CovidReducer,
  GeneralReducer
});
