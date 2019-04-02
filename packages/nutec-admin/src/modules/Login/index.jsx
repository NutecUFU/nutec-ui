import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Card } from 'nutec-ui'
import { actions as AuthActions } from 'state/auth/auth-actions'
import Logo from 'core/assets/images/logo.png'
import { logout } from 'core/utils/auth'
import LoginForm from './Form'

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100%;

`

const LoginFormWrapper = styled.div`
  max-width: 330px;
  width: 100%;
  margin:0 auto;
`

const LoginLogo = styled.img`
  margin-bottom: 1.5rem;
`

const TitleLogin = styled.h1`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

`

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

  redirectUserIsLogged() {
    const { isLogged } = this.props
    return (
      isLogged && <Redirect to="/" />
    )
  }

  render() {
    const { status, login } = this.props
    return (
      <LoginWrapper>
        <LoginFormWrapper>
          <LoginLogo src={Logo} alt="Logo" />
          <Card>
            <Card.Body>
            <TitleLogin>Você ja tem uma conta?</TitleLogin>
            <LoginForm type={status} onSubmit={(data) => login(data)}/>
            </Card.Body>
          </Card>
        </LoginFormWrapper>
        { this.redirectUserIsLogged() }
      </LoginWrapper>
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
