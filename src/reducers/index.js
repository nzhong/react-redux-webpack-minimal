import { combineReducers } from "redux";

import UiState from "./uiState";

const rootReducer = combineReducers({
  uiState: UiState
});

export default rootReducer;
