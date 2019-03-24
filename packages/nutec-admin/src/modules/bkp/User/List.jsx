import React, { Component } from 'react'


class UserList extends Component {
  render() {
    const {list, children} = this.props
    return (
      <div className="user__list row">
        { children }
      </div>
    )
  }
}

export default UserList
