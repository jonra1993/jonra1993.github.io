import 'src/__mocks__';
import React from 'react';
import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { SettingsProvider } from './contexts/SettingsContext';
import { BrowserRouter } from 'react-router-dom';
import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import StyledEngineProvider from '@material-ui/core/StyledEngineProvider';
import { store, persistor } from 'src/redux/store'
import App from './App'
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
		<HelmetProvider>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<StyledEngineProvider injectFirst>
						<LocalizationProvider dateAdapter={AdapterDateFns}>
							<SettingsProvider>
								<BrowserRouter>
									<App />
								</BrowserRouter>
							</SettingsProvider>
						</LocalizationProvider>
					</StyledEngineProvider>
				</PersistGate>
			</Provider>
		</HelmetProvider>
    ,

	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
