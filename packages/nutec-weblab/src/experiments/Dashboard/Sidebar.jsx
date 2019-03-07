import React from 'react'
import { Nav, Icon } from 'nutec-ui'
import { SidebarWrapper, SidebarBrand, NavLink } from './styled'
import Logo from 'core/assets/images/logo-n.png'

const Sidebar = () => {

  return (
    <SidebarWrapper>
      <SidebarBrand>
        <img src={Logo} alt="Logo" />
        <span>Weblab</span>
      </SidebarBrand>
      <Nav>
        <NavLink>
          <Icon categorie="solid" name="user" size="small"/>
          <div>User</div>
        </NavLink>
      </Nav>
    </SidebarWrapper>
  )
}

export default Sidebar
