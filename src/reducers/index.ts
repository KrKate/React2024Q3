import { combineReducers } from 'redux';
import homePageReducer from '../store/homePageSlice';
import paginationReducer from '../store/paginationSlice';

export const rootReducer = combineReducers({
  homePage: homePageReducer,
  pagination: paginationReducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;
