import React from 'react'
import styled, { css } from 'styled-components'
import {Link} from 'react-router-dom'

const LinkWrapper = styled.span`
  a{
    color: #212121;
    text-decoration: none;
    transition: background-color .3s;
    display: block;
    padding: 0 15px;
    cursor: pointer;
  }

  ${props => props.inline && css`
    a {
      display: inline !important;
    }
  `}

  ${props => props.hover && css`
    a:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  `}
`

const Internal = ({to, children, hover, inline, className}) => (
  <LinkWrapper hover={hover} inline={inline} className={className}>
    <Link to={to}>
      {children}
    </Link>
  </LinkWrapper>
)

const External = ({to, children, hover, inline, target, className}) => (
  <LinkWrapper hover={hover} inline={inline} className={className}>
    <a href={to} target={target}>
      {children}
    </a>
  </LinkWrapper>
)

Internal.External = External

export default Internal