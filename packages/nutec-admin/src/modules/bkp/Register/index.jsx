import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import RegisterForm from './form'
import { actions as UserActions } from 'state/user/user-actions'

import Logo from 'core/assets/images/logo.png'
import Toaster from '../Toaster';

class Register extends Component {

  handleSubmit(user) {
    user.status = 'PENDING'
    this.props.createUser(user, true)
  }

  redirect() {
    return (
      <Redirect to="/login" />
    )
  }

  render(){
    return(
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table">
            <div className="d-table-cell align-middle">
              <div className="text-center mt-4">
                <div className="d-flex align-items-center">
                  <img className="mx-auto mb-4" src={Logo}/>
                </div>
                <h1 className="h2 mb-4">Registre-se</h1>
              </div>
              <div className="card">
                <div className="card-body">
                  <div className="">
                    <RegisterForm handleSubmit={(user) => this.handleSubmit(user)}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    )
  }
}

const mapProps = (state) => ({

})

const mapActions = {
  createUser: UserActions.createUser
}

export default connect(mapProps, mapActions)(Register)
