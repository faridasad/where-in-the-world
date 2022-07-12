import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
  .header-con, .input-con, .country-con, .filter-con, .button-con, .border-con, .input, .toggle-con {
    background-color: ${({ theme }) => theme.bg_c};
    color: ${({ theme }) => theme.text};
  }
  .error-br {
    background-color: ${({ theme }) => theme.e_br};
  }
  
  .lds-dual-ring::after {
    border-color: ${({ theme }) => theme.e_br} transparent ${({ theme }) =>
  theme.e_br} transparent;
  }

`;
export const lightTheme = {
  body: "hsl(0, 0%, 100%)",
  text: "hsl(200, 15%, 8%)",
  bg_c: "hsl(0, 0%, 100%)",
  e_br: "hsl(200, 15%, 8%)",
};
export const darkTheme = {
  body: "hsl(207, 26%, 17%)",
  text: "hsl(0, 0%, 100%)",
  bg_c: "hsl(209, 23%, 22%)",
  e_br: "hsl(0, 0%, 100%)",
};
