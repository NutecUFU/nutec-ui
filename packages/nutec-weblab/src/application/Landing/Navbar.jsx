import React from 'react'
import Logo from 'core/assets/images/logo.png'
import { Container } from 'reactstrap'
import { NavbarWrapper, NavbarBrand } from './styled';

const Navbar = () => {

  return (
    <NavbarWrapper>
      <Container>
        <NavbarBrand>
          <img src={Logo} alt="Logo" />
          <span>WEBLAB</span>
        </NavbarBrand>
      </Container>
    </NavbarWrapper>
  )

}

export default Navbar