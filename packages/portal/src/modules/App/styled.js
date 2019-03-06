import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Container } from 'nutec-ui'

export const AppWrapper = styled.div`

`
export const FooterWrapper = styled.footer`
  border-top: 1px solid rgba(0,0,0,.12);
  padding: 4rem 1.25rem 2.5rem;
`

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
`

export const NavbarContent = styled(Container)`
  display: flex;
  justify-content: space-between;
`

export const NavbarLogo = styled.div`
`

export const Nav = styled.ul`
  list-style-type: none;
  padding:0px;
  margin:0px;
  display: flex;
  align-items: center;
`

export const NavLink = styled(Link)`
  font-weight: bold;
  margin: 0 20px;
  font-size: 16px;
  text-decoration: none;
  color: #000;

  &:hover {
    color:  #04a9b5;
  }
`

export const NavItem = styled.li`
  font-weight: bold;
  margin: 0 20px;
  font-size: 16px;
`

export const NavButton = styled.button`
  padding: .75rem 1.9rem;
  border-radius: 4px;
  border: none;
  background-color: #04a9b5;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-left: 30px;
  cursor: pointer;
`