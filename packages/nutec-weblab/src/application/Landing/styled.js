import styled from 'styled-components'
import { Card, Jumbotron, CardText } from 'reactstrap'


export const LandingWrapper = styled.div`
  height: 100%;
  background: #f8f9fa;
`

export const NavbarWrapper = styled.div`
  padding: .6rem;
  background: #fff;
  box-shadow: 0 1px 15px rgba(0,0,0,.04), 0 1px 6px rgba(0,0,0,.04);
`

export const NavbarBrand = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 120px;
    height: 30px;
  }

  span {
    margin-left: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 28px;
    opacity: .54;
  }
`
export const SectionWrapper = styled(Jumbotron)`
  text-align: center;
  background: linear-gradient(141deg, #9fb8ad 0%, #1fc8db 51%, #2cb5e8 75%) !important;
  color: #fff;

  p {
    padding: 0 50px;
  }
`

export const ListWrapper = styled.div`
  margin-top: 50px;
`

export const ListItemWrapper = styled(Card)`
  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, .05);
  height: 450px;
  border: none !important;

  button {
    margin-right: 10px;
  }
`

export const ListItemTextWrapper = styled(CardText)`
  height: 120px;
  overflow-y: auto;
`

export const ListItemImageWrapper = styled.div`
  height: 200px;
  background: #eeeeee;
  border-top-left-radius: calc(.25rem - 1px);
  border-top-right-radius: calc(.25rem - 1px);

  img {
    object-fit: contain;
    max-height: 100%;
  }
`