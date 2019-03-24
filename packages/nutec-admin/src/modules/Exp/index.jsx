import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import styled from 'styled-components'

import { HeaderTitle } from 'core/components'
import List from './List'
import Create from './Create'

const ExpWrapper = styled.div``

class Exps extends Component {

  routes = [
    {
      path: '/',
      exact: true,
      component: List,
      title: () => <HeaderTitle title="Experimentos" path={this.props.match.path} />
    },
    {
      path: '/create',
      exact: true,
      component: Create,
      title: () => <HeaderTitle back title="Criar Experimento" path={this.props.match.path} />
    }
  ]

  renderHeader() {
    const { match } = this.props
    return (
      <div>
        {this.routes.map((route, i) => (
          <Route key={i} exact={route.exact} path={`${match.path}${route.path}`} component={route.title} />
        ))}
      </div>
    )
  }

  render(){
    const { match, location } = this.props
    return (
      <ExpWrapper>
        {this.renderHeader()}
        <Switch location={location}>
          {this.routes.map((route, i) => (
            <Route key={i} exact={route.exact} path={`${match.path}${route.path}`} component={route.component} />
          ))}
        </Switch>
      </ExpWrapper>
    )
  }
}

export default Exps