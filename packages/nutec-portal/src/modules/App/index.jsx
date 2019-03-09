import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Route } from 'react-router-dom'
import { Container } from 'nutec-components'

import { actions as applicationActions } from '../../state/application/application-actions'
import { theme } from '../../core/styled/theme'
import GlobalStyle from '../../core/styled/global-style'
import { AppWrapper } from './styled'
import Navbar from './Navbar'
import Footer from './Footer'
import Team from '../Team'
import Contact from '../Contact'
import Exp from '../Exp'
import Plans from '../Plans'
import Guide from '../Guide'
import Curiosities from '../Curiosities'
import Projects from '../Projects'
import Home from '../Home';

class App extends Component {
  render(){
    return (
      <ThemeProvider theme={theme}>
        <AppWrapper>
          <GlobalStyle/>
          <Navbar />
            <Container>
              <Route path="/" exact component={Home}/>
              <Route path="/team" exact component={Team}/>
              <Route path="/contact" exact component={Contact}/>
              <Route path="/exp" exact component={Exp}/>
              <Route path="/prof/plans" exact component={Plans}/>
              <Route path="/prof/guides" exact component={Guide}/>
              <Route path="/prof/curiosities" exact component={Curiosities}/>
              <Route path="/prof/projects" exact component={Projects}/>
            </Container>
          <Footer />
        </AppWrapper>
      </ThemeProvider>
    )
  }
}

const mapProps = (state) => ({
  sidebar: state.application.sidebar
})

const mapActions = {
  toggleSidebar: applicationActions.toggleSidebar
}

export default connect(mapProps, mapActions)(App)