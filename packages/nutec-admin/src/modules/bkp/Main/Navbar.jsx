import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu } from 'reactstrap'
import Logo from 'core/assets/images/logo.png'
import Icon from '../../nutec-ui/icon';

class Navbar extends Component {
  render() {
    const { toggleSidebar, user } = this.props
    return (

      <div className="row navbar flex-nowrap justify-content-between align-items-center">
        <div className="col-4">
          <a className="menu-button d-none d-md-block" onClick={toggleSidebar}>
            <Icon name="bars" categorie="solid" size="small"/>
          </a>
        </div>
        <a className="navbar-logo">
          <img src={Logo} />
        </a>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <a className="menu-button d-none d-md-block">
            <Icon name="bell" categorie="solid" size="medium"/>
          </a>
          <div className="menu-button d-none d-md-block">
            <UncontrolledDropdown setActiveFromChild>
              <DropdownToggle tag="a" href="#" className="nav-link" caret>
                <div className="navbar-profile d-inline-block">
                  <span className="mr-2">{user && user.name}</span>
                  <img className="rounded-circle" src={user && user.photo}/>
                </div>
              </DropdownToggle>
              <DropdownMenu className="main__navbar__ddown">
                <Link to="/profile" className="dropdown-item">
                  <Icon name="user" categorie="solid" size="tiny"/>
                  Perfil
                </Link>
                <Link to="/config" className="dropdown-item">
                  <Icon name="cogs" categorie="solid" size="tiny"/>
                  Conigurações
                </Link>
                <div className="dropdown-divider"></div>
                <Link to="/login" className="dropdown-item">
                  <Icon name="power-off" categorie="solid" size="tiny"/>
                  Log Out
                </Link>
              </DropdownMenu>
            </UncontrolledDropdown>
          </div>
        </div>
      </div>

    )
  }
}

export default Navbar
