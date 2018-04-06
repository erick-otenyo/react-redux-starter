import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import common from "./common";

export default combineReducers({
  common: common,
  router: routerReducer
});
