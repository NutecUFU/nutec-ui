import React, { Component } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom'
import styled, {ThemeProvider} from 'styled-components'
import { Route, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import GlobalStyle from 'core/styled/global-style'
import themeDefault from 'core/styled/theme-default'
import { firstLogin } from 'core/utils/auth'
import store from './store'
import Main from 'modules/Main'
import Login from 'modules/Login'

const AppWrapper = styled.div`
  height: 100%;
`

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter basename="/admin">
          <ThemeProvider theme={themeDefault}>
            <AppWrapper>
              <GlobalStyle />
              <Switch>
                <Route path="/login" component={Login} />
                <Route
                render={() =>
                  firstLogin() ? (
                    <Main />
                  ) : (
                    <Redirect
                      to={{
                        pathname: "/login"
                      }}
                    />
                  )
                }
              />
              </Switch>
            </AppWrapper>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
