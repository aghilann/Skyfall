import { configureStore } from '@reduxjs/toolkit';
import { legacySlice } from './API/legacySlice';
import themeReducer from './themeSlice';
import userReducer from './userSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    [legacySlice.reducerPath]: legacySlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(legacySlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
