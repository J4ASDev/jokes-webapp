import { createContext, useContext, useMemo } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import useDarkMode from '../../hooks/useDarkMode'
import ThemeEnum from '../../ts/enums/ThemeEnum'

const DARKMODE = {
  background: '#292929',
  tomato: '#FF9B79',
  orange: '#FFDC4F',
  yellow: '#FFFF60',
  green: '#52B640',
}

const LIGHTMODE = {
  background: '#E5E5E5',
  tomato: '#FF6347',
  orange: '#FFA500',
  yellow: '#FFFF00',
  green: '#008000'
}

const Context = createContext<any>({})

type Props = {
  children: React.ReactNode
}

export function StylesThemeProvider({ children }: Props) {
  const [mode, setMode] = useDarkMode()

  const theme = useMemo(() => mode === ThemeEnum.LIGHTMODE ? LIGHTMODE : DARKMODE, [mode])

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ setMode }}>
        <GlobalStyles />

        {children}
      </Context.Provider>
    </ThemeProvider>
  )
}

const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;

export default () => useContext(Context)
