import React from 'react'
import styled, { css } from 'styled-components'

const TitleWrapper = styled.div`
  font-weight: 300;

  ${props => props.h1 && css`
    font-size: 1.75rem;
  `}

  ${props => props.h2 && css`
    font-size: 1.4rem;
  `}

  ${props => props.h3 && css`
    font-size: 1.2rem;
  `}

  ${props => props.h4 && css`
    font-size: 1.15rem;
  `}

  ${props => props.h5 && css`
    font-size: 1.1rem;
  `}
`

const Title = (props) => (
  <TitleWrapper {...props}>
    {props.children}
  </TitleWrapper>
)

export default Title