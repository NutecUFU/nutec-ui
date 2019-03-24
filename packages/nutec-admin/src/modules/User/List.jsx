import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Icon, Spinner, Button } from 'nutec-ui'
import { connect } from 'react-redux'

import { actions as UserActions } from 'state/user/user-actions'
import { slide } from 'core/styled/transitions'
import { ButtonConfirmAction, Header } from 'core/components'
//import Sidebar from './Sidebar'
//import Header from './Header'

const ListWrapper = styled.div`
  margin-right: ${props => props.showSidebar ? '310px' : '0'};
`
const CustomCol = styled(Col)`
  padding: 10px 20px;
`

const UserCard = styled(Card)`
  text-align: center;
  padding: 20px;
`

const UserCardName = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-top: 20px;
`

const ControlWrapper = styled.div``

const DeleteWrapper = styled.div`
  position: absolute;
`

class List extends Component {

  componentDidMount() {
    this.props.getUsers()
  }

  renderControPendingUser(id) {
    const { deleteUser, activeUser } = this.props
    const value = {status: 'ACTIVE'}
    return (
      <ControlWrapper>
        <Button onClick={() => deleteUser(id)}>Recusar</Button>
        <Button type="submit" onClick={() => activeUser(id, value)} primary>Aceitar</Button>
      </ControlWrapper>
    )
  }

  renderDeleteIcon(id) {
    const { deleteUser } = this.props
    return (
      <DeleteWrapper>
        <ButtonConfirmAction onConfirm={() => deleteUser(id)}>
          <Icon name="trash-alt" categorie="solid" size="tiny" />
        </ButtonConfirmAction>
      </DeleteWrapper>
    )
  }

  renderList() {
    const { list } = this.props
    return (
      <Row>
        {list && list.map(({id, name, status}) => (
          <CustomCol xs={12} sm={3} md={3} key={id}>
            <UserCard>
              <Card.Body>
                { status === 'PENDING' ? this.renderControPendingUser(id) : this.renderDeleteIcon(id) }
                <Icon categorie="regular" name="user" size="medium"/>
                <UserCardName>{name}</UserCardName>
              </Card.Body>
            </UserCard>
          </CustomCol>
        ))}
      </Row>
    )
  }

  render() {
    return (
      <ListWrapper>
        <Header to="/users/create"/>
        {this.props.list ? this.renderList(): <Spinner />}
        {/*<Sidebar showSidebar={showSidebar} />*/}
        <slide.style/>
      </ListWrapper>
    )
  }
}

const mapProps = (state) => ({
  list: state.user.list
})

const mapActions = {
  getUsers: UserActions.getAllUser,
  deleteUser: UserActions.deleteUser
}

export default connect(mapProps, mapActions)(List)
