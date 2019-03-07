import React from 'react'
import styled, {css} from 'styled-components'
import { Link } from 'react-router-dom'

const NavWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    ${props => props.horizontal && css`
      display: inline;
    `}
  }
`

const NavItemWrapper = styled.li`

`

const NavItemLinkWrapper = styled(NavItemWrapper)`
  a {
    text-decoration: none;
    color: #fff;
  }
`

const Nav = (props) => (
  <NavWrapper {...props}>
    {props.children}
  </NavWrapper>
)

const NavItem = ({className, children}) => (
  <NavItemWrapper className={className}>
    {children}
  </NavItemWrapper>
)

const NavItemLink = ({className, children, to}) => (
  <NavItemLinkWrapper className={className}>
    <Link to={to || '/'}>
      {children}
    </Link>
  </NavItemLinkWrapper>
)

Nav.Item = NavItem
Nav.Link = NavItemLink

export default Nav
