import React, { Component } from 'react'
import Science from 'core/assets/images/science.png'

import { InitialWrapper, InitialResumeWrapper, InitialImageWrapper } from './styled'

class Initial extends Component {
  render() {
    return(
      <InitialWrapper>
        <InitialResumeWrapper>
          <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </p>
        </InitialResumeWrapper>
        <InitialImageWrapper>
          <img src={Science} />
        </InitialImageWrapper>
        
      </InitialWrapper>
    )
  }
}

export default Initial