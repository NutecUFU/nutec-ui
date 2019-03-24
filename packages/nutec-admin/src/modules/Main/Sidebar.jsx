import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import { Nav, Icon } from 'nutec-ui'
import LogoN from 'core/assets/images/logo-n.png'

const SidebarWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1006;
  min-width: 64px;
  background: ${ ({theme}) => theme.color.primary };
  transition: min-width .15s;
  text-align: center;

  ${props => props.isOpen && css`
    text-align: left;
    min-width: 240px;
  `}
`

const BrandLogo = styled.div`
  text-align: center;
  box-shadow:inset 0 0 0 99999px rgba(0,0,0,0.1);
  height: 64px;
  width: ${props => props.isOpen ? '240px' : '64px' };
  display: table-cell;
  vertical-align: middle;
`

const Img = styled.img`
  width: 30px;
`

const BrandLogoSpan = styled.div`
  margin-top: 5px;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  font-size: 10px;
  color: #fff;
`

const NavLink = styled(Nav.Link)`
  color: #fff;
  padding-top: 15px;
  padding-bottom: 15px;

  ${props => props.isOpen && css`
    padding-left: 20px;
  `}

  &:hover {
    box-shadow:inset 0 0 0 99999px rgba(255,255,255,0.1);
    cursor: pointer;
  }
`

const NavSpan = styled.span`
  padding: 0;
  display: none;

  ${props => props.isOpen && css`
    display: initial;
    padding: 0 30px;
  `}
`

class Sidebar extends Component {

  menuList = [
    {
      icon: 'home',
      title: 'Home',
      link: '/'
    },
    {
      icon: 'users',
      title: 'Usuários',
      link: '/users'
    },
    {
      icon: 'memory',
      title: 'Experimentos',
      link: '/experiments'
    },
    {
      icon: 'calendar-alt',
      title: 'Agenda',
      link: '/schedule'
    },
    {
      icon: 'comments',
      title: 'Feedback',
      link: '/feedback'
    },
    {
      icon: 'comment-dots',
      title: 'Contatos',
      link: '/contact'
    },
    {
      icon: 'handshake',
      title: 'Parceiros',
      link: '/partners'
    }
  ]

  render() {
    const { sidebar } = this.props

    return (
      <SidebarWrapper isOpen={sidebar}>
        <BrandLogo isOpen={sidebar}>
          <Img src={LogoN} />
          <BrandLogoSpan>ADMIN</BrandLogoSpan>
        </BrandLogo>
        <Nav>
          {this.menuList.map((item, i) => (
            <NavLink key={i} to={item.link} isOpen={sidebar}>
              <Icon categorie="solid" name={item.icon} size="small"/>
              <NavSpan isOpen={sidebar}>{item.title}</NavSpan>
            </NavLink>
          ))}

          {/* <NavLink to="/users">
            <Icon categorie="solid" name="users" size="small"/>
          </NavLink>
          <NavLink>
            <Icon categorie="solid" name="memory" size="small"/>
          </NavLink>
          <NavLink to="/schedule">
            <Icon categorie="solid" name="calendar-alt" size="small"/>
          </NavLink>
          <NavLink>
            <Icon categorie="solid" name="comments" size="small"/>
          </NavLink>
          <NavLink>
            <Icon categorie="solid" name="comment-dots" size="small"/>
          </NavLink>
          <NavLink>
            <Icon categorie="solid" name="handshake" size="small"/>
          </NavLink> */}
        </Nav>
      </SidebarWrapper>
    )
  }
}

export default Sidebar
