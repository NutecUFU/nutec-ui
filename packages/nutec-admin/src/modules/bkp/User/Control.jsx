import React, { Component } from 'react'

class UserControl extends Component {
  render() {
    const {toggleModal} = this.props
    return (
      <div className="row mb-3 mt-3">
        <div className="col-11 col-lg-11">
          <input type="text" placeholder="Search" className="form-control"/>
        </div>
        <div className="col-1 col-lg-1">
          <input onClick={() => toggleModal()} type="button" value="create" className="btn btn-primary w-100"/>
        </div>
      </div>
    )
  }
}

export default UserControl
