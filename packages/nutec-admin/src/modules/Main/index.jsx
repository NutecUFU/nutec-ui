import React, { Component } from 'react'
import styled from 'styled-components'
import { Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { ApplicationActions } from 'state/application/application-actions'
import { actions as AuthActions } from 'state/auth/auth-actions'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import User from 'modules/User'
import Exp from 'modules/Exp'
import Toaster from 'modules/Toaster'
import Contact from 'modules/Contact'

const DashboardWrapper = styled.div`

`

const MainWrapper = styled.main`
  position: relative;
  overflow: hidden;
  transition: all .15s;
  margin-left: ${props => (props.expanded ? 240 : 64)}px;
`

const ContentWrapper = styled.div`
  padding: 1.5rem 5rem;
`

class Main extends Component {

  render() {
    const { sidebar, toggleSidebar, logout } = this.props

    return (
      <DashboardWrapper>
        <Sidebar sidebar={sidebar}/>
        <MainWrapper expanded={sidebar}>
          <Navbar toggleSidebar={() => toggleSidebar()} logout={() => logout()} />
          <ContentWrapper>
            <Route path="/users" component={User}/>
            <Route path="/experiments" component={Exp}/>
            <Route path="/contact" component={Contact} />
          </ContentWrapper>
          <Toaster />
        </MainWrapper>
      </DashboardWrapper>
    )
  }
}

const mapProps = ({application: { sidebar }}) => ({
  sidebar
})

const mapActions = {
  toggleSidebar: ApplicationActions.toggleSidebar,
  logout: AuthActions.logout
}

export default withRouter(connect(mapProps, mapActions)(Main))
