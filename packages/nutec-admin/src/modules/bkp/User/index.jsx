import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actions as UserActions } from 'state/user/user-actions'

import List from './List'
import ListItem from './ListItem'
import Control from './Control'
import UserModal from './modal';
import UserCreateForm from './CreateForm'

import "./style.scss"


class User extends Component {

  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { modal, users } = this.props
    return (
      <div className="user">
        <h1>Usuários</h1>
        <Control
          toggleModal={() => this.props.toggleModal()}
        />
        <div className="separator"></div>
        <List>
          {users && users.map(user => (
            <ListItem
              key={user.id}
              {...user}
              deleteItem={(id) => this.props.deleteUser(id)}
              activeUser={(id, values) => this.props.activeUser(id, values)}
            />
          ))}
        </List>
        <UserModal
          status={modal}
          toggleModal={() => this.props.toggleModal()}>
          <UserCreateForm
            submitForm={(data) => this.props.createUser(data)}
            toggleModal={() => this.props.toggleModal()}/>
        </UserModal>
      </div>
    )
  }
}

const mapProps = (state) => ({
  users: state.user.list,
  modal: state.user.modal
})

const mapActions = {
  createUser: UserActions.createUser,
  getUsers: UserActions.getAllUser,
  deleteUser: UserActions.deleteUser,
  toggleModal: UserActions.toggleModal,
  activeUser: UserActions.activeUser
}


export default connect(mapProps, mapActions)(User)
