import React from 'react'
import { NavbarWrapper, NavbarTitle } from './styled';

const Navbar = ({title}) => {

  return (
    <NavbarWrapper>
      <NavbarTitle>{title}</NavbarTitle>
    </NavbarWrapper>
  )
}

export default Navbar
