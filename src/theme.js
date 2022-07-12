import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .App {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .header-con, .input-con, .country-con, .filter-con, .button-con {
    background-color: ${({ theme }) => theme.bgc};
    color: ${({ theme }) => theme.text};
  }

  .toggle-con {
    color: ${({ theme }) => theme.text};
  }

`;
export const lightTheme = {
  body: 'hsl(0, 0%, 100%)',
  text: 'hsl(200, 15%, 8%)',
  bgc: 'hsl(0, 0%, 100%)',
  
};
export const darkTheme = {
  body: 'hsl(207, 26%, 17%)',
  text: 'hsl(0, 0%, 100%)',
  bgc: 'hsl(209, 23%, 22%)'
};