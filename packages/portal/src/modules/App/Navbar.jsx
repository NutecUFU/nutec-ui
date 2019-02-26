import React, { Component } from 'react'

import { NavbarWrapper, NavbarContent, NavbarLogo, NavbarCollapse, NavbarCollapseWrapper } from './styled'
import List from './List'
import { Img, Icon } from '../../core/components'
import Logo from '../../core/assets/images/logo.png'

class Navbar extends Component {
  render(){
    return (
      <NavbarWrapper>
        <NavbarContent>
          <NavbarCollapseWrapper>
            <NavbarCollapse onClick={this.props.toggleSidebar}>
              <Icon name="bars" size="small" categorie="solid"/>
            </NavbarCollapse>
          </NavbarCollapseWrapper>
          <NavbarLogo to="/">
            <Img src={Logo}/>
          </NavbarLogo>
          <List navbar/>
        </NavbarContent>
      </NavbarWrapper>
    )
  }
}

export default Navbar