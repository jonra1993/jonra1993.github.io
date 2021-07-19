export const BASE_URL = process.env.REACT_APP_ENVIRONMENT === 'production' ? process.env.REACT_APP_ENDPOINT_PROD : process.env.REACT_APP_ENDPOINT_DEV;

export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  NATURE: 'NATURE'
};
