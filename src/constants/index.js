export const BASE_URL = process.env.REACT_APP_ENDPOINT;
export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
};

export const ENABLE_REDUX_DEV_TOOLS = process.env.REACT_APP_ENVIRONMENT === 'production'? false : true;
