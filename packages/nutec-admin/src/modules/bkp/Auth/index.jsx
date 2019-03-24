import React, { Component } from 'react'
import { Route, Switch,  withRouter } from 'react-router-dom'
import Login from 'modules/Login'
import Register from 'modules/Register'
import Toaster from '../Toaster'
import './style.scss'

class Auth extends Component {
  render(){
    return(
      <div className="d-flex align-items-center">
        <Switch>
          <Route path="login" exact component={Login}/>
          <Route path="register" exact component={Register}/>
        </Switch>
      </div>
    )
  }
}

export default Auth
