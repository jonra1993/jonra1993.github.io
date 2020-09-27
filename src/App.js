import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import { Provider } from 'react-redux';
import Home from './pages/Home'


/**
 * Component for the App.
 */

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Home/>
      </PersistGate>
    </Provider>
  );
};


export default App;
