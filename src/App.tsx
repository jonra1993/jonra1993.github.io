// @ts-nocheck
import type { FC } from 'react';
import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import RTL from './components/RTL';
import { gtmConfig } from './config';
import useScrollReset from './hooks/useScrollReset';
import useSettings from './hooks/useSettings';
import routes from './routes';
import { ConfirmProvider } from 'material-ui-confirm';
import { createCustomTheme } from './theme';
import 'src/i18n';

const App: FC = () => {
  const content = useRoutes(routes);
  const { settings } = useSettings();

  useScrollReset();

  const theme = createCustomTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <RTL direction={settings.direction}>
        <CssBaseline />
        <Toaster position="top-center" />
        <ConfirmProvider>
          {content}
        </ConfirmProvider>
      </RTL>
    </ThemeProvider>
  );
};

export default App;
