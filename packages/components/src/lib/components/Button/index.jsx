import React from 'react'
import styled, { css } from 'styled-components'

const ButtonWrapper = styled.button`
  display: inline-block;
  font-weight: 400;
  border: 1px solid transparent;
  border-radius: .25rem;
  line-height: 1.5;
  font-size: 1rem;
  padding: .375rem .75rem;
  user-select: none;
  cursor: pointer;
  outline: none;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out;

  &:hover {
    box-shadow:inset 0 0 0 99999px rgba(0,0,0,0.1);
  }

  ${({theme, primary}) => primary && css`
    background-color: ${theme.color.primary};
    color: #fff;
  `}
`

const Button = (props) => (
  <ButtonWrapper {...props} onClick={props.onClick}>
    {props.children}
  </ButtonWrapper>
)

export default Button
