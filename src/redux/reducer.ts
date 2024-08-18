import { combineReducers } from "@reduxjs/toolkit";
import { dataSliceReducer } from "./dataSlice";
import { countriesSliceReducer } from "./countriesSlice";

const rootReducerApp = combineReducers({
  data: dataSliceReducer,
  countries: countriesSliceReducer,
});

export default rootReducerApp;

export type RootState = ReturnType<typeof rootReducerApp>;
