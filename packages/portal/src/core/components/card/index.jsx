import React from 'react'
import styled, { css } from 'styled-components'

const Card = styled.div`
  position: relative;
  margin: 0.5rem 0 1rem 0;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  background: #fff;
  text-align: center;

  ${props => props.hoverable && css`
    &:hover{
      transition: box-shadow .25s;
      box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `}
`

const Header = styled.div`
  margin-bottom: 1rem;
  position: relative;

  span {
    color: #909090;
    font-size: .76rem;
  }
`

const Body = styled.div`
  padding: .75rem;
`

const Footer = styled.div`
  border-top: 1px solid rgba(160, 160, 160, 0.2);
  padding: 16px 24px;
`

const CardHeader = ({children}) => (
  <Header>
    {children}
  </Header>
)

const CardBody = ({children}) => (
  <Body>
    {children}
  </Body>
)

const CardFooter = ({children}) => (
  <Footer>
    {children}
  </Footer>
)

Card.Header = CardHeader
Card.Body = CardBody
Card.Footer = CardFooter

export default Card