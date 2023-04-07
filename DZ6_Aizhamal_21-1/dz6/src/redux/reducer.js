import { combineReducers } from "redux";
import { changeStatusReducer } from "./reducers/changeStatusReducer";

export const rootReducer = combineReducers({
  changeStatusReducer,
});
