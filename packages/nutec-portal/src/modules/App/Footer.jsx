import React, { Component } from 'react'
import { Container, Grid } from 'nutec-components'
import { FooterWrapper } from './styled'

class Navbar extends Component {
  render(){
    return (
      <FooterWrapper>
        <Container>
          <Grid.Row>
            Teste
          </Grid.Row>
          <Grid.Row>
            <Grid.Col>Teste</Grid.Col>
            <Grid.Col>Teste</Grid.Col>
          </Grid.Row>
        </Container>
      </FooterWrapper>
    )
  }
}

export default Navbar
