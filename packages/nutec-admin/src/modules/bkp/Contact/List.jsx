import React, { Component } from 'react'

import { ButtonConfirmAction } from 'nutec-ui/'

class List extends Component {
  render(){
    const {name, email, message, id, deleteItem} = this.props
    return(
      <div className="col-4 p-4">
        <div className="card text-center">
          <div className="edit-item">
            <ButtonConfirmAction className="edit-item-confirm" onConfirm={() => deleteItem(id)}>
              <i className="material-icons m-2">delete</i>
            </ButtonConfirmAction>
          </div>
          <div className="card-body text-truncate">
            <h5>{name}</h5>
            <p className="font-weight-bold">{email}</p>
            <p>{message}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default List
