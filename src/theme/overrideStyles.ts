import {createGlobalStyle} from 'styled-components';

export const OverrideStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  html {
    font-size: 14px;

    @media (min-width: 1921px) {
      font-size: 18px;
    }
  }
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }
`;
