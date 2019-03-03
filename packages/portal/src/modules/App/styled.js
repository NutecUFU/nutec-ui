import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const AppWrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`

export const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
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
    color:  #007bff;
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
  background-color: #007bff;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  margin-left: 30px;
  cursor: pointer;
`