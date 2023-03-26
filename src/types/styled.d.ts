import styledComponents from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      primary: string;
      gray: string;
      darkGray: string;
      success: string;
      black: string;
      white: string;
      background: string;
    };

    font: {
      family: string;
    };

    breakpoints: {
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
    };
  }
}
