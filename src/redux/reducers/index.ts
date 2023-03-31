import { combineReducers } from "redux";
import services from "./services";
import alert from './alert'
import packages from './packages'
export default combineReducers({
    services,
    alert,
    packages
});