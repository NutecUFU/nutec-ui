import React from 'react'
import { Container } from 'reactstrap'
import { SectionWrapper } from './styled'

const Section = () => {
  return (
    <SectionWrapper>
      <Container>
        <h1>Bem-vindo ao Nutec Weblab</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
      </Container>
    </SectionWrapper>
  )
}

export default Section