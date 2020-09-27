import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import appReducer from './reducers';
import { persistStore, persistReducer } from 'redux-persist';
//import rootSaga  from './sagas';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();
// Middleware: Redux Persist Config
const middlewares = [sagaMiddleware];
const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage,
  timeout: null 
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, appReducer);
//const persistedReducer = persistCombineReducers(persistConfig, rootReducer);


if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}
// Middleware: Redux Persist Persister
export const store = createStore(
    persistedReducer,
    //applyMiddleware(sagaMiddleware),
    composeWithDevTools(applyMiddleware(thunk)),
  );

// Middleware: Redux Saga
//sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);