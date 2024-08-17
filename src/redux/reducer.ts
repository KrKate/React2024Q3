import { combineReducers } from "@reduxjs/toolkit";
import { dataSliceReducer } from "./dataSlice";

const rootReducerApp = combineReducers({
  data: dataSliceReducer,
});

export default rootReducerApp;

export type RootState = ReturnType<typeof rootReducerApp>;
