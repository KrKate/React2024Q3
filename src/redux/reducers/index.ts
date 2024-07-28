import { combineReducers, Reducer } from 'redux';
import homePageReducer from '../store/homePageSlice';
import paginationReducer from '../store/paginationSlice';
import searchReducer from '../store/searchSlice';
import chooseReducer from '../store/chooseSlice';
import { apiSliceProducts } from '../store/apiSlice';

export const rootReducer: Reducer = combineReducers({
  homePage: homePageReducer,
  pagination: paginationReducer,
  search: searchReducer,
  choose: chooseReducer,
  [apiSliceProducts.reducerPath]: apiSliceProducts.reducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;
