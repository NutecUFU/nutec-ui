import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Button } from 'nutec-ui'

const HeaderWrapper = styled(Row)`
  margin-bottom: 20px;
`

const SearchInput = styled.input`
  width: 100%;
  border-radius: .6rem;
  border: 1px solid #e0e0e0;
  outline: none;
  display: block;
  padding: .375rem .75rem;
  font-size: 1rem;
  line-height: 1.5;
  box-sizing:border-box;
`

const CreateButton = styled(Button)`
  width: 100%;
`

class Header extends Component {


  render() {
    const { to } = this.props
    return (
      <HeaderWrapper>
        <Col xs={10} >
          <SearchInput name="search" placeholder="Pesquisar..." />
        </Col>
        <Col xs={2} >
          <Link to={to}>
            <CreateButton primary>Criar</CreateButton>
          </Link>
        </Col>
      </HeaderWrapper>
    )
  }
}


export default Header
