import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { ThunkAction } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import type { Action } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage,
  timeout: null
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true',
});

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
// });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();
