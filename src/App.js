import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './redux/store'
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';
import Home from './views/Home'
import routes, { renderRoutes } from './routes';

const history = createBrowserHistory();

/**
 * Component for the App.
 */

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
            <Router history={history}>
                {renderRoutes(routes)}
            </Router>          
          <Home/>
      </PersistGate>
    </Provider>
  );
};


export default App;
