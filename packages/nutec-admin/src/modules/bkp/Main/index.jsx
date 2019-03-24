import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as ApplicationActions } from 'state/application/application-actions'
import { actions as ProfileActions } from 'state/profile/profile-actions'
import { actions as AuthActions } from 'state/auth/auth-actions'
import { Route, withRouter } from 'react-router-dom'
import Toaster from '../Toaster';
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard';
import User from 'modules/User'
import Exp from 'modules/Exp'
import Scheduling from 'modules/Scheduling'
import Feedback from 'modules/Feedback'
import "./style.scss"
import Contact from '../Contact';
import Partner from '../Partner';
import Profile from '../Profile';
import { getUserAuth } from '../../core/utils/auth';

class Main extends Component {
  user = getUserAuth();

  componentDidMount(){
    this.props.verifyUserLogged()
    this.props.getProfile(this.user.id)
  }

  renderMain() {
    const { sidebar, user } = this.props

    return (
      <div className="main">
        <Navbar toggleSidebar={() => this.props.toggleSidebar()} user={user}/>
        <div>
          <div className={sidebar}>
            <Sidebar/>

            <main className="main-content">
              <div className="container-fluid">
                <Route path="/" exact component={Dashboard}/>
                <Route path="/user" component={User} />
                <Route path="/exp" component={Exp}/>
                <Route path="/scheduling" component={Scheduling} />
                <Route path="/feedback" component={Feedback} />
                <Route path="/contact" component={Contact}/>
                <Route path="/partners" component={Partner}/>
                <Route path="/profile" component={Profile}/>
              </div>
            </main>
          </div>
        </div>
        <Toaster />
      </div>
    )
  }

  render() {
    const { isLogged } = this.props
    return isLogged ? this.renderMain() : (
      <h1>Loading...</h1>
    )

  }
}

const mapProps = (state) => ({
  application: state.application,
  sidebar: state.application.sidebar? 'openSide' : 'closeSide',
  user: state.profile.user,
  isLogged: state.auth.isLogged
})

const mapActions = {
  toggleSidebar: ApplicationActions.toggleSidebar,
  getProfile: ProfileActions.getProfile,
  verifyUserLogged: AuthActions.isUserLogged
}


export default withRouter(connect(mapProps, mapActions)(Main));
