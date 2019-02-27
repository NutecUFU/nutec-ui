import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.i`
  font-size: ${props => {
    return {
      'tiny': '18px',
      'small': '24px',
      'medium': '36px',
      'large': '48px'
    }[props.size]
  }}

  &.linkedin {
    color: #0077B5;
  }
`

const getStyleCategorie = (style) => {
  return {
    'solid': 's',
    'regular': 'r',
    'light': 'l',
    'brands': 'b'
  }[style]
}

const Icon = ({className, name, size, categorie}) => (
  <IconWrapper
    className={`fa${getStyleCategorie(categorie)} fa-${name} ${className}`}
    size={size}
  >
  </IconWrapper>
)

export default Icon
