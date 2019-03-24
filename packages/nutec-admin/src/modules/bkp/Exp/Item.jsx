import React, { Component } from 'react'
import { Badge } from 'nutec-ui'

import './style.scss'

class Item extends Component {
  render(){
    const { name, status } = this.props
    return(
      <div className="card text-center mb-3 exp__item">
        <div className="card-body my-3">
          <p className="card-title ">{name}</p>
          <div>
            <Badge color="primary" className="badge-pill">{status}</Badge>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
