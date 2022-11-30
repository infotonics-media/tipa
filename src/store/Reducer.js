import { combineReducers } from "redux";
import FetchApi from './Reducer/Fetch-Api'


const RootReducer = combineReducers({
    FetchApi,
})


export default RootReducer