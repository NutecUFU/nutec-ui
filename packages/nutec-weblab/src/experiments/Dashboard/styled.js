import styled from 'styled-components'
import { Nav } from 'nutec-ui'

const SIDEBAR_WIDTH  = '110px'

export const ExperimentsWrapper = styled.div`
  height: 100%;
  background: ${({theme}) => theme.color.blueBackground};
`

export const ExperimentsContentWrapper = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 410px;
  right: 0;
`

export const NavbarWrapper = styled.div`
  height: 80px;
  line-height: 80px;
  padding: 0 10px;
  border-bottom: 1px solid ${({theme}) => theme.color.borderColor};
  background: ${({theme}) => theme.color.blueBackground};
  position: fixed;
  width: 100%;
  z-index: 99;
`

export const NavbarTitle = styled.h1`
  font-family: "Montserrat", sans-serif;
  color: #047c85;
  padding: 0;
  margin: 0;
`

export const SidebarBrand = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  align-items: center;
  flex-direction: column;

  img {
    width: 30px;
    height: 35px;
  }

  span {
    margin-top: 10px;
    font-family: "Montserrat", sans-serif;
    font-size: 18px;
    color: #fff;
  }

`

export const ClassroomWrapper = styled.div`
  position: absolute;
  top: 0;
  left: ${SIDEBAR_WIDTH};
  width: 300px;
  height: 100%;
  background: #fff;
  background: ${({theme}) => theme.color.primary};
  box-shadow:inset 0 0 0 99999px rgba(0,0,0,0.1);
`

export const ClassroomContent = styled.div`
  padding:  20px;
`

export const SidebarWrapper = styled.div`
  height: 100%;
  color: #fff;
  width: ${SIDEBAR_WIDTH};
  background: #047c85;
  box-shadow: 0 5px 11px 0 rgba(50, 50, 50, 0.08);
`

export const NavItem = styled(Nav.Item)`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  padding: 10px;
  box-shadow: 0 5px 11px 0 rgba(50, 50, 50, 0.08);
  background: #047c85;
  color: #fff;
  margin: 5px 0;
  border-radius: 10px;
`
export const NavLink = styled(Nav.Link)`
  text-align: center;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  a {
    color: color: #fff;
    opacity: .54;
  }

  &:hover {
    box-shadow:inset 0 0 0 99999px rgba(0,0,0,0.1);
    a {color: #fff; opacity: 1;}
  }
`
