import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Dropdown, Nav, Icon } from 'nutec-ui'
import { getUserAuth } from 'core/utils/auth'

const NavbarWrapper = styled.div`
  background: #fff;
  height: 64px;
  line-height: 64px;
  border-bottom: 1px solid #e0e0e0;
  padding: 0 20px;
  box-shadow: 1px 0 3px rgba(0,0,0,.15);
`

const NavWrapper = styled(Nav)`
  float: right;
  //margin-right: 15px;
`

const NavItemWrapper = styled(Nav.Item)`
  float: left;

`

const NavMenu = styled.a`
  &:hover {
    cursor: pointer;
  }
`

class Navbar extends Component {

  state = {
    user: getUserAuth()
  }

  render() {

    const { toggleSidebar, logout } = this.props
    const { user } = this.state

    return (
      <NavbarWrapper>
        <NavMenu onClick={toggleSidebar}>
          <Icon categorie="solid" name="bars" size="small"/>
        </NavMenu>
        <NavWrapper horizontal>
          <NavItemWrapper>
            <Dropdown title={user && user.name}>
              <Nav>
                <Nav.Item>
                  <Link to="/login" onClick={() => logout()}>Logout</Link>
                </Nav.Item>
              </Nav>
            </Dropdown>
          </NavItemWrapper>
        </NavWrapper>
      </NavbarWrapper>
    )
  }
}

export default Navbar
