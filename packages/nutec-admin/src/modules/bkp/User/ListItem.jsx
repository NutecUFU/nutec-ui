import React, { Component } from 'react'
import { Button, ButtonConfirmAction, Badge } from 'nutec-ui'

class UserListItem extends Component {

  renderControPendingUser(id) {
    const { deleteItem, activeUser } = this.props
    const value = {status: 'ACTIVE'}
    return (
      <div className="control-pending">
        <Button className="mr-2" color="secondary" type="button" onClick={() => deleteItem(id)}>Recusar</Button>
        <Button color="primary" type="submit" onClick={() => activeUser(id, value)}>Aceitar</Button>
      </div>
    )
  }

  renderDeleteIcon(id) {
    const { deleteItem } = this.props
    return (
      <div className="edit-item">
        <ButtonConfirmAction className="edit-item-confirm" onConfirm={() => deleteItem(id)}>
          <i className="material-icons m-2">delete</i>
        </ButtonConfirmAction>
      </div>
    )
  }

  render() {
    const {id, name, email, status, permission} = this.props
    return (
      <div className="user__list__item col-2 p-4 ">
        <div className="card text-center ">
          { status === 'PENDING' ? this.renderControPendingUser(id) : this.renderDeleteIcon(id) }
          <div className="card-body text-truncate">
            <i className="material-icons m-4">account_circle</i>
            <h5>{name}</h5>
            <p className="font-weight-bold">{email}</p>
            <div>
              <Badge color="primary" className="badge-pill">{permission}</Badge>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserListItem
