import { combineReducers } from "redux";
import jsons from "./jsonReducer";
import texts from "./textReducer";

const rootReducer = combineReducers({
  jsons,
  texts,
});

export default rootReducer;
