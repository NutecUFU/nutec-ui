import React from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const ButtonWrapper = styled.button`
  border: 1px solid rgb(4, 169, 181);
  background: transparent;
  border-radius: 5px;
  color: rgb(4, 169, 181);
  outline: none !important;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;

  &:hover {
    color: #fff;
    background: rgb(4, 169, 181);
  }

  ${props => props.primary && css`
    color: #fff;
    background: rgb(4, 169, 181);
  `}
`

const Button = (props) => (
  <ButtonWrapper {...props}>
    {props.children}
  </ButtonWrapper>
)

const ButtonLink = (props) => (
  <Link to={props.to}>
    <Button {...props}>
      {props.children}
    </Button>
  </Link>
)

Button.Link = ButtonLink

export default Button