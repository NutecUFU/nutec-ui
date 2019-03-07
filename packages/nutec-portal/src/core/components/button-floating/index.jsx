import styled from 'styled-components'

const btnFloating = styled.a`
  position: absolute;
  right: 24px;
  bottom: -20px;
  display: inline-block;
  color: #fff;
  overflow: hidden;
  z-index: 1;
  width: 40px;
  height: 40px;
  line-height: 40px;
  padding: 0;
  border-radius: 50%;
  transition: .3s;
  cursor: pointer;
  vertical-align: middle;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);

  background-color: ${props => props.color}

  i {
    width: inherit;
    display: inline-block;
    text-align: center;
    color: #fff;
    font-size: 1.6rem;
    line-height: 40px;
  }
`

export default btnFloating