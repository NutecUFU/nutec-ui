import React from 'react'
import styled from 'styled-components'

const CardWrapper = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`

const CardBodyWrapper = styled.div`
  padding:0 20px;
`

const Card = ({className, children}) => (
  <CardWrapper className={className}>
    {children}
  </CardWrapper>
)

const CardBody = ({children}) => (
  <CardBodyWrapper>
    {children}
  </CardBodyWrapper>
)

Card.Body = CardBody

export default Card
