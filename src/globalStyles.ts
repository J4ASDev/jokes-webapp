import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.colors.background};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
