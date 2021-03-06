import React from 'react'
import { NavbarWrapper, NavbarTitle } from './styled';

const Navbar = ({title}) => {
  return (
    <NavbarWrapper>
      <NavbarTitle>{title}</NavbarTitle>
      <span>30:00</span>
    </NavbarWrapper>
  )
}

export default Navbar
