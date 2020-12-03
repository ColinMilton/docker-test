import { combineReducers } from "redux";

import { answersReducer } from "./answers";
import { inputReducer } from "./input";

export const rootReducer = combineReducers({
  answers: answersReducer,
  inputValues: inputReducer,
});
