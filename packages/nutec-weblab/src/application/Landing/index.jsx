import React from 'react'
import Navbar from './Navbar'
import Section from './Section'
import List from './List'
import { LandingWrapper } from './styled';

const Landing = () => {

  return (
    <LandingWrapper>
      <Navbar />
      <Section />
      <List />
    </LandingWrapper>
  )


}

export default Landing
