import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import Application from 'application'
import Experiments from 'application/Dashboard'
import store from 'store'

const Routes = () => (
  <Provider store={store}>
    <BrowserRouter basename="/weblab">
      <Switch>
        <Route exact path="/" component={Application} />
        <Route path="/experiments" component={Experiments} />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default Routes
