import styled, { css } from 'styled-components'

const Img = styled.img`
  max-width: 100%;
  height: auto;

  ${props => props.circle && css`
    border-radius: 50%;
  `}

`

export default Img