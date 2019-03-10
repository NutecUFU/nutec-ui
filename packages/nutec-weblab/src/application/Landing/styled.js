import styled from 'styled-components'
import { Card, Jumbotron } from 'reactstrap'


export const LandingWrapper = styled.div`

`

export const NavbarWrapper = styled.div`
  padding: .6rem;
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
  background: #343a40 !important;
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
`

export const ListItemImageWrapper = styled.div`
  height: 200px;
  background: #212121;

  img {
    object-fit: contain;
    max-height: 100%;
  }
`