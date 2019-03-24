import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Icon } from 'nutec-ui'

const HeaderWrapper = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`

const HeaderIconBack = styled(Icon)`
  margin-right: 20px;
  cursor: pointer;
`

const HeaderTitleWrapper = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-size: 28px;

`

const HeaderTitle = ({back, title, path}) => (
  <HeaderWrapper>
    {back && (
      <Link to={path}>
        <HeaderIconBack categorie="solid" name="arrow-left" size="small"/>
      </Link>
    )}
    <HeaderTitleWrapper>{title}</HeaderTitleWrapper>
  </HeaderWrapper>
)

export default HeaderTitle
