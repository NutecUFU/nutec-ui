import React, { Component } from 'react'
import Logo from 'core/assets/images/logo.png'
import { Container } from 'reactstrap'
import { NavbarWrapper } from './styled';

class Navbar extends Component {
  render() {
    return (
      <NavbarWrapper>
        <Container>
        <img src={Logo} />
        </Container>
      </NavbarWrapper>
    )
  }
}

export default Navbar