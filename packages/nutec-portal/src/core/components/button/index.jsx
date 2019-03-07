import styled, {css} from 'styled-components'

const button = styled.button`
  text-decoration: none;
  color: #0082a6;
  background: #fff;
  text-align: center;
  letter-spacing: .5px;
  letter-spacing: .2s ease-out;

  font-size: .8rem;
  outline: none;

  border: 1px solid #0082a6;
  border-radius: 3px;
  display: inline-block;
  padding: .75rem 1.3rem .6rem;
  text-transform: uppercase;
  vertical-align: middle;

  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);


  &:hover {
    cursor: pointer;
    background: #0082a6;
    color: #fff;
  }

  ${props => props.primary && css`
    background: #0082a6;
    color: #fff;
  `}

  &:disabled {
    color: #fff;
    background-color: #6c757d;
    border-color: #6c757d;
    opacity: .65;
    cursor: default;
  }
`

export default button