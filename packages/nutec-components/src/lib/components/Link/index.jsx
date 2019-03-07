import React from 'react'
import { Link as link } from 'react-router-dom'
import styled from 'styled-components'

const LinkWrapper = styled.span`
  a {
    color: #212121;
    text-decoration: none;
    transition: background-color .3s;
    font-size: 1rem;
    display: block;
    padding: 0 15px;
    cursor: pointer;
  }
`

const Link = ({to, children}) => (
  <LinkWrapper>
    <link to={to}>
      {children}
    </link>
  </LinkWrapper>
 
)

const LinkExternal = ({href, children}) => (
  <LinkWrapper>
    <a href={href}>
      {children}
    </a>
  </LinkWrapper>
)

Link.External = LinkExternal

export default Link