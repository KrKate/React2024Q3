import { combineReducers } from 'redux';
import homePageReducer from '../store/homePageSlice';
import paginationReducer from '../store/paginationSlice';
import searchReducer from '../store/searchSlice';
import { apiSliceProducts } from '../store/apiSlice';

export const rootReducer = combineReducers({
  homePage: homePageReducer,
  pagination: paginationReducer,
  search: searchReducer,
  [apiSliceProducts.reducerPath]: apiSliceProducts.reducer,
});

export type AppRootState = ReturnType<typeof rootReducer>;
