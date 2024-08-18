import { configureStore } from "@reduxjs/toolkit";
import rootReducerApp from "./reducer";

const store = configureStore({
  reducer: rootReducerApp,
});

export default store;
