import React from 'react'
import Logo from 'core/assets/images/logo.png'
import { NavbarWrapper } from './styled';

const Navbar = () => {

  return (
    <NavbarWrapper>
      <img src={Logo} />
    </NavbarWrapper>
  )
}

export default Navbar