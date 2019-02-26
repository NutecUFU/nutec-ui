import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Route } from 'react-router-dom'
import { themeDefault } from 'core/styled/theme/default';
import GlobalStyle from 'core/styled/global-style'
import { ApplicationWrapper } from './styled';

import Landing from './Landing'

const Application = () => {

  return (
    <ThemeProvider theme={themeDefault}>
      <ApplicationWrapper>
        <Route exact path="/" component={Landing} />
        <GlobalStyle />
      </ApplicationWrapper>
    </ThemeProvider>
  )
}

export default Application
