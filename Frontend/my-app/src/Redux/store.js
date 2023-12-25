// store.js
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from './slice';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }),
});

export default store;
