import React, { Component } from 'react'

import { 
  NavbarWrapper,
  NavbarLogo,
  Nav,
  NavItem,
  NavButton,
  NavLink,
  NavbarContent,
} from './styled'
import Logo from 'core/assets/images/logo.png'

class Navbar extends Component {
  render(){
    return (
      <NavbarWrapper>
        <NavbarContent>
          <NavbarLogo to="/">
            <img src={Logo} alt="logo"/>
          </NavbarLogo>
          <Nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/team">Equipe</NavLink>
            <NavItem>
              <NavButton href="/weblab">Acessar Weblab</NavButton>
            </NavItem>
          </Nav>
        </NavbarContent>
      </NavbarWrapper>
    )
  }
}

export default Navbar
