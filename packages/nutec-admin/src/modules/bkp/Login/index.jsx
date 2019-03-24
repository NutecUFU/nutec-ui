import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import Logo from 'core/assets/images/logo.png'
import { actions as AuthActions } from 'state/auth/auth-actions'
import LoginForm from './form'

import './style.scss'
import Toaster from '../Toaster';

class Login extends Component {

  verifyDataToLogin(values, status) {
    const { verify } = this.props
    return !values.password ? verify(values.email) : this.loginRules(values, status)
  }

  loginRules(values, status) {
    const { login } = this.props
    const { email, password, confirmPassword } = values
    values.status = status;
    if (confirmPassword) {
      return password === confirmPassword ? login({email, password, status}) : this.renderPasswordNotMatch();
    }
    login(values);
  }

  renderPasswordNotMatch() {
    return (
      <div class="alert alert-success" role="alert">
        Senhas não correspondem
      </div>
    )
  }

  redirectUserIsLogged() {
    const { isLogged } = this.props
    return (
      isLogged && <Redirect to="/" />
    )
  }

  render(){
    const { status } = this.props
    return(
      <div className="container h-100">
        <div className="d-flex h-100 align-items-center justify-content-center">
          <div className="col-12 col-md-5 col-xl-4 card mt-4">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img className="mx-auto mb-3 mt-3" src={Logo}/>
              </div>
              <div className="separator mb-4"></div>
              <LoginForm status={status} submitForm={(values) => this.verifyDataToLogin(values, status)}/>
            </div>
          </div>
        </div>
        { this.redirectUserIsLogged() }
        <Toaster />
      </div>
    )
  }
}

const mapProps = (state) => ({
  status: state.auth.status,
  isLogged: state.auth.isLogged
})

const mapActions = {
  verify: AuthActions.verifyUserRequest,
  login: AuthActions.loginRequest
}

export default connect(mapProps, mapActions)(Login)
