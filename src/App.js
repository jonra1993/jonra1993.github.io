import React, { useEffect } from 'react';
import { useRoutes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ThemeProvider } from '@material-ui/core';
//import { SnackbarProvider } from 'notistack';
import GlobalStyles from 'src/components/GlobalStyles';
import useScrollReset from './hooks/useScrollReset';
import useSettings from 'src/hooks/useSettings';
import { createTheme } from 'src/theme';
import routes from './routes';


/**
 * Component for the App.
 */
const App = () => {
    const content = useRoutes(routes);
    const { settings } = useSettings();
    useScrollReset();


    const theme = createTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        roundedCorners: settings.roundedCorners,
        theme: settings.theme
    });

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            {content}
        </ThemeProvider>
    );
};


export default App;
