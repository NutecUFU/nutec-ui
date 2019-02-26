import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    height: 100%;
  }
`

export default GlobalStyle
