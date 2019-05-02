import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import GlobalStyle from 'core/styled/global-style'
import { themeDefault } from 'core/styled/theme/default';
import { DashboardActions } from './state/action'
import { ExperimentsWrapper, ExperimentsContentWrapper } from './styled'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Classroom from './Classroom'
import LittleHouse from 'experiments/LittleHouse';

const Experiments = ({match, title, status, addUser}) => {

  useEffect(() => {
    addUser({name: 'Maycon'})
  }, [])

  return (
    <ThemeProvider theme={themeDefault}>
      <ExperimentsWrapper>
        <GlobalStyle />
        <Sidebar />
        { status && <Classroom /> }
        <ExperimentsContentWrapper status={status}>
          <Navbar title={title} />
          <Route path={`${match.url}/little-house`} component={LittleHouse} />
        </ExperimentsContentWrapper>
      </ExperimentsWrapper>
    </ThemeProvider>
  )
}

Experiments.defaultProps = {
  title: '',
}

Experiments.propTypes = {
  match: PropTypes.object.isRequired,
  title: PropTypes.string,
}

const mapProps = ({dashboard: { title, status }}) => ({
  title,
  status
})

export default connect(mapProps, DashboardActions)(Experiments)
