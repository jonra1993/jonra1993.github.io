import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { create } from 'jss';
import rtl from 'jss-rtl';
import {
    jssPreset,
    StylesProvider,
    ThemeProvider
} from '@material-ui/core';
//import { SnackbarProvider } from 'notistack';
import GoogleAnalytics from 'src/components/GoogleAnalytics';
import useSettings from 'src/hooks/useSettings';
import { createTheme } from 'src/theme';
import routes, { renderRoutes } from './routes';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const history = createBrowserHistory();

/**
 * Component for the App.
 */
const App = () => {
    const { settings } = useSettings();

    const theme = createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        theme: settings.theme
    });

    return (
        <ThemeProvider theme={theme}>
            <StylesProvider jss={jss}>
                <Router history={history}>
                    <GoogleAnalytics />
                    {renderRoutes(routes)}
                </Router>
            </StylesProvider>
        </ThemeProvider>
    );
};


export default App;
