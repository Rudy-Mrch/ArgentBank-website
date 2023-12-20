import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});

export default store;
