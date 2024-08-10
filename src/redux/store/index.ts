import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '../reducers';

export const store = configureStore({
  reducer: {
    characters: rootReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
