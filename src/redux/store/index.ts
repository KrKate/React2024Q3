import { configureStore, Store } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';
import { apiSliceProducts } from './apiSlice';

const store: Store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSliceProducts.middleware),
});

export default store;
