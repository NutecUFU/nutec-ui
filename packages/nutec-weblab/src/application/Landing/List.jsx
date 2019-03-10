import React from 'react'
import { Container, Row, Col, CardImg, CardBody, CardTitle } from 'reactstrap'
import { ListWrapper, ListItemWrapper, ListItemTextWrapper, ListItemImageWrapper } from './styled'
import { Button } from 'core/components'
import Thomson from 'core/assets/images/thomson.png'
import Milikan from 'core/assets/images/milikan.jpg'
import House from 'core/assets/images/house.jpg'

const EXPERIMENTS = [
  {
    image: Thomson,
    active: false,
    title: 'Razão Carga-Massa do Elétron',
    text: 'Este experimento permite obter a razão entre o valor da carga do elétron e da massa do elétron e reproduz o experimento de Joseph John Thomson (inglês, 1856-1940), realizado em 1897 e que resultou na descoberta do elétron.'
  },
  {
    image: Milikan,
    active: false,
    title: 'Experimento de Millikan',
    text: 'Este experimento permite estimar o valor da carga do elétron, de forma semelhante ao experimento realizado por Robert Andrews Millikan (americano, 1868-1953) em 1909.'
  },
  {
    image: House,
    active: true,
    title: 'Transformações de Energia',
    text: 'Este experimento permite estudar diversas transformações de energia por meio de uma maquete residencial.'
  }
]

const Item = ({image, title, text, active}) => {


  return (
    <ListItemWrapper>
      <ListItemImageWrapper>
        <CardImg top src={image} alt="Experiment" />
      </ListItemImageWrapper>
      <CardBody>
        <CardTitle><strong>{title}</strong></CardTitle>
        <ListItemTextWrapper>{text}</ListItemTextWrapper>
        {active 
          ? (<div><Button.Link to="experiments/little-house">Acessar</Button.Link><Button primary>Agendamento</Button>  </div>)
          : (<strong>Em manutenção</strong>)
        }
      </CardBody>
    </ListItemWrapper>
  )
}

const List = () => {
  return (
    <ListWrapper>
      <Container>
        <Row>
          {EXPERIMENTS.map((item, i) =>  
            <Col xs="4" key={i}>
              <Item 
                image={item.image}
                title={item.title}
                text={item.text}
                active={item.active}
              />
            </Col>
          )}
        </Row>
      </Container>
    </ListWrapper>
  )
}

export default List