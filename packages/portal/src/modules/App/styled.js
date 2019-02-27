import styled, { css } from 'styled-components'

import { Link } from '../../core/components'

export const AppWrapper = styled.div`

`

export const AppHeaderWrapper = styled.header`

`

export const AppBodyWrapper = styled.main`

`

export const AppBody = styled.div`
  margin-top: 65px;
`

export const NavbarWrapper = styled.nav`
  position: fixed;
  z-index: 1000;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  height: 56px;
  line-height: 56px;
  top: 0;
  left: 0;
  right: 0;
  background: #fff;
`

export const NavbarContent = styled.div`
  width: 98%;
  height: 100%;
  position: relative;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
`

export const NavbarLogo = styled(Link)`
  font-size: 3.5rem;
  flex: 1 1 auto !important;
`

export const NavbarCollapseWrapper = styled.span`
  display: none;
  flex: 1 1 auto !important;
  
  @media only screen and (max-width: 992px){
    display block;
  }
`

export const NavbarCollapse = styled.a`
  float: left;
  position: relative;
  z-index: 1;
  height: 56px;
  margin: 0 18px;
  cursor: pointer;
  font-size: 2rem;
`

export const ListWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style:none;

  ${props => props.navbar && css`
    float: right;
    @media only screen and (max-width: 992px) {
      display: none !important;
    }

    li{
      float:left;
    }
  `}

  ${props => props.sidebar && css`
    line-height: 56px;

    li {
      float:none;
    }
  `}
  
`

export const ListItemWrapper = styled.li`
`

export const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  padding-top: 56px;
  z-index: 999;
`

export const SidebarMenuWrapper = styled.div`
  height: 100%;
  width: 230px;
  position: fixed;
  background-color: #fff;

  transform: translateX(-100%) !important;
  transition: transform 500ms;

  ${props => props.open && css`
    transform: translateX(0%) !important;
    box-shadow: 0 3px 30px rgba(0, 0, 0, 0.1), 0 3px 20px rgba(0, 0, 0, 0.1);
  `}
`

export const SidebarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 997;
  will-change: opacity;
  display: none;
  opacity: 0;
  transition: opacity .5s;

  ${props => props.open && css`
    opacity: 1;
    display: block;
  `}
`

export const DropDown = styled.div`
  display: none;
  position: absolute;
  background: #fff;

  border: 1px solid rgba(0,0,0,.15);
  border-radius: .25rem;

  ${props => props.open && css`
    display: block;
  `}
`