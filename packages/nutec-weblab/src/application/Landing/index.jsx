import React, { Component } from 'react'
import Navbar from './Navbar'
import List from './List'
import { LandingWrapper } from './styled';

class Landing extends Component {
  render() {
    return (
      <LandingWrapper>
        <Navbar />
        <List />
      </LandingWrapper>
    )
  }

}

export default Landing
