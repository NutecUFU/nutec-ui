import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Transitions from 'core/styled/transitions'
import { HeaderTitle } from 'core/components'
import List from './List'
import Create from './Create'
import { UsersWrapper } from './styled'

class Users extends Component {


  routes = [
    {
      path: '/',
      exact: true,
      component: List,
      title: () => <HeaderTitle title="Usuários" path={this.props.match.path} />
    },
    {
      path: '/create',
      component: Create,
      title: () => <HeaderTitle back title="Criar usuários" path={this.props.match.path} />
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

  render() {
    const { match, location } = this.props
    return (
      <UsersWrapper>
        {this.renderHeader('Usuarios')}
        <Transitions pageKey={location.key} {...location.state}>
            <Switch location={location}>
              {this.routes.map((route, i) => (
                <Route key={i} exact={route.exact} path={`${match.path}${route.path}`} component={route.component} />
              ))}
            </Switch>
        </Transitions>
      </UsersWrapper>
    )
  }
}

export default Users
