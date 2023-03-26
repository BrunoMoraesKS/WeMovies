import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyles = createGlobalStyle`${css`
  * {
    font-family: ${({ theme }) => theme.font.family};

    margin: 0;
    padding: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${({ theme }) => theme.palette.background};
    color: ${({ theme }) => theme.palette.gray};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.palette.darkGray};
  }

  a,
  a:visited,
  a:hover,
  a:active {
    text-decoration: none;
  }
`}`;
