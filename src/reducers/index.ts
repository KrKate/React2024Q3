import { combineReducers } from 'redux';
import homePageReducer from '../store/homePageSlice';
import paginationReducer from '../store/paginationSlice';
import searchSlice from '../store/searchSlice';

export const rootReducer = combineReducers({
  homePage: homePageReducer,
  pagination: paginationReducer,
  search: searchSlice,
});

export type AppRootState = ReturnType<typeof rootReducer>;
