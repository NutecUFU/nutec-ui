import React, { Component } from 'react'

import TeamContext from './Context'
import List from './List'
import TeamProvider from 'api/team'

class Team extends Component {

  state = {
    list: [],
    loading: true
  }

  componentDidMount(){
    this.getTeam()
  }

  getTeam = async () => {
    const team = await TeamProvider.getAll()
    this.setState({
      ...this.state,
      loading: false,
      list: [ ...team, ...this.state.list ]
    })
  }

  render(){
    const { list, loading } = this.state
    return (
      <TeamContext.Provider value={{list, loading}}>
        <List />
      </TeamContext.Provider>
    )
  }
}

export default Team