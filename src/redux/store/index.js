import { 
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector
} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import thunk from 'redux-thunk'
import { ENABLE_REDUX_DEV_TOOLS } from 'src/constants';
import rootReducer from './rootReducer';

const encryptor = encryptTransform({
  secretKey: 'my-Super-Secret-key-jrtec-remote-inspections',
  onError: function (error) {
    // Handle the error.
  },
})

const persistConfig = {
  key: 'root',
  storage: storage,
  timeout: null,
  transforms: [encryptor] 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: ENABLE_REDUX_DEV_TOOLS,
  middleware: [thunk]
});


export const persistor = persistStore(store);

export const useSelector = useReduxSelector;
export const useDispatch = () => useReduxDispatch();


