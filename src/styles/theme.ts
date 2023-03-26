import { DefaultTheme } from 'styled-components';

export const breakpoints = {
  xs: 375,
  sm: 480,
  md: 720,
  lg: 1080,
  xl: 1440,
  xxl: 1920,
};

export const defaultTheme: DefaultTheme = {
  palette: {
    primary: '#009EDD',

    gray: '#999999',
    darkGray: '#333333',

    success: '#039B00',

    black: '#2F2E41',
    white: '#FFFFFF',

    background: '#2F2E41',
  },

  breakpoints: breakpoints,

  font: {
    family:
      "Open Sans, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
} as const;
