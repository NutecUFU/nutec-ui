import React from 'react'
import Logo from 'core/assets/images/logo.png'
import { Container, Row, Col, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'
import { NavbarWrapper, ListWrapper, ListItemWrapper, ListItemImageWrapper } from './styled'
import Thomson from 'core/assets/images/thomson.png'
import Milikan from 'core/assets/images/milikan.jpg'
import House from 'core/assets/images/house.jpg'

const Item = ({image, title, text}) => {
  return (
    <ListItemWrapper>
      <ListItemImageWrapper>
        <CardImg top src={image} alt="Experiment" />
      </ListItemImageWrapper>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
      </CardBody>
    </ListItemWrapper>
  )
}

const List = () => {

  return (
    <ListWrapper>
      <Container>
        <Row>
          <Col xs="4">
            <Item 
              image={Thomson}
              title="Determinação da Razão Carga-Massa do Elétron"
              text="Este experimento permite obter a razão entre o valor da carga do elétron e da massa do elétron e reproduz o experimento de Joseph John Thomson (inglês, 1856-1940), realizado em 1897 e que resultou na descoberta do elétron."
            />
          </Col>
          <Col xs="4">
            <Item 
              image={Milikan}
              title="Experimento de Millikan"
              text="Este experimento permite estimar o valor da carga do elétron, de forma semelhante ao experimento realizado por Robert Andrews Millikan (americano, 1868-1953) em 1909."
            />
          </Col>
          <Col xs="4">
            <Item 
              image={House}
              title="Transformações de Energia"
              text="Este experimento permite estudar diversas transformações de energia por meio de uma maquete residencial."
            />
          </Col>
        </Row>
      </Container>
    </ListWrapper>
  )
}

export default List