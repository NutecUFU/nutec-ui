import React, { Component } from 'react'
import styled from 'styled-components'

import Initial from './Initial'

const HomeWrapper = styled.div`
`

class Home extends Component {

  componentDidMount(){
   
  }

  render(){
    return(
      <HomeWrapper>
        <Initial />
        {/*
          <SomeExps />
          <Team />
          <News />
          <Contact />
        */}
      </HomeWrapper>
    )
  }
}

export default Home