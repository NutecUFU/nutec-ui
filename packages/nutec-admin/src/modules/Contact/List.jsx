import React, { Component } from 'react'
import { Icon, Card } from 'nutec-ui'
import { Col } from 'react-flexbox-grid'

import { ButtonConfirmAction } from 'core/components'

class List extends Component {
  render(){
    const {name, email, message, id, deleteItem} = this.props
    return(
      <Col>
        <Card>
          <Card.Body>
            <ButtonConfirmAction className="edit-item-confirm" onConfirm={() => deleteItem(id)}>
              <Icon name="trash-alt" categorie="solid" size="tiny" />
            </ButtonConfirmAction>

            <h5>{name}</h5>
            <p className="font-weight-bold">{email}</p>
            <p>{message}</p>
          </Card.Body>
        </Card>
      </Col>
    )
  }
}

export default List
