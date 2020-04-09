import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Home from './views/home'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
