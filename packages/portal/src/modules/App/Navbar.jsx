import React, { Component } from 'react'

import { 
  NavbarWrapper,
  NavbarLogo,
  Nav,
  NavItem,
  NavButton,
  NavLink
} from './styled'
import Logo from 'core/assets/images/logo.png'

class Navbar extends Component {
  render(){
    return (
      <NavbarWrapper>
     
        <NavbarLogo to="/">
          <img src={Logo}/>
        </NavbarLogo>
        <Nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/team">Equipe</NavLink>
          <NavItem>
            <NavButton>Acessar Weblab</NavButton>
          </NavItem>
        </Nav>
      </NavbarWrapper>
    )
  }
}

export default Navbar