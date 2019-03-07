import React, { Component } from 'react'

import ExpContext from './Context'
import List from './List'
import ExpProvider from 'api/exp'

class Exp extends Component {

  state = {
    list: [],
    loading: true
  }

  componentDidMount(){
    this.getExps()
  }

  getExps = async () => {
    const exps = await ExpProvider.getAll()
    this.setState({
      ...this.state,
      loading: false,
      list: [...exps, ...this.state.list]
    })
  }

  render(){
    const { list, loading } = this.state
    return (
      <ExpContext.Provider value={{list, loading}}>
        <List />
      </ExpContext.Provider>
    )
  }
}

export default Exp