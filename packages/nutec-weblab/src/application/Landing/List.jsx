import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Row, Col, CardImg, CardBody, CardTitle } from 'reactstrap'
import { ListWrapper, ListItemWrapper, ListItemTextWrapper, ListItemImageWrapper } from './styled'
import { Button } from 'core/components'
import { LandingActions } from './state/action'

const Item = ({image, title, text, active}) => {


  return (
    <ListItemWrapper>
      <ListItemImageWrapper>
        <CardImg top src={image} alt="Experiment" />
      </ListItemImageWrapper>
      <CardBody>
        <CardTitle><strong>{title}</strong></CardTitle>
        <ListItemTextWrapper>{text}</ListItemTextWrapper>
        {active !== 'INACTIVE'
          ? (<div><Button.Link to="experiments/little-house">Acessar</Button.Link><Button primary>Agendamento</Button>  </div>)
          : (<strong>Em manutenção</strong>)
        }
      </CardBody>
    </ListItemWrapper>
  )
}

const List = ({experiments, getExperiments}) => {

  useEffect(() => {
    getExperiments()
  }, [])

  return (
    <ListWrapper>
      <Container>
        <Row>
          {experiments.map((item, i) =>  
            <Col xs="4" key={i}>
              <Item 
                image={item.photo}
                title={item.name}
                text={item.description}
                active={item.status}
              />
            </Col>
          )}
        </Row>
      </Container>
    </ListWrapper>
  )
}

const mapActions = {
  getExperiments: LandingActions.loadExperiments
}

const mapProps = ({landing: { experiments }}) => ({
  experiments
})

export default connect(mapProps, mapActions)(List)