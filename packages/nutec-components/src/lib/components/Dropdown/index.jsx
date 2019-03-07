import React, {Component} from 'react'
import styled from 'styled-components'
import onClickOutside from "react-onclickoutside";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const DropdownContentWrapper = styled.div`
  display: block;
  position: absolute;
  background-color: #fff;
  min-width: 160px;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`

const DropdownTitleWrapper = styled.a`
  padding: 15px;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  &:hover {
    box-shadow:inset 0 0 0 99999px rgba(0,0,0,0.1);
    cursor: pointer;
  }
`

class Dropdown extends Component {

  state = {
    isOpen: false
  }

  handleClickOutside = () => this.setState({
    isOpen: false
  })

  toggle = () => this.setState({
    isOpen: !this.state.isOpen
  })

  render() {
    const {classname, title, children} = this.props
    return (
      <DropdownWrapper className={classname}>
        <DropdownTitleWrapper onClick={() => this.toggle()}>{title}</DropdownTitleWrapper>
        {this.state.isOpen && (
          <DropdownContentWrapper className={`${classname || ''} dropdown-content`}>
            {children}
          </DropdownContentWrapper>
        )}
      </DropdownWrapper>
    )
  }
}


export default onClickOutside(Dropdown)
