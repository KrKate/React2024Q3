import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import { apiSliceProducts } from './apiSlice';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSliceProducts.middleware),
});

export default store;
