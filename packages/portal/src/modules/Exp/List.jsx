import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import ExpContext from './Context'
import { ButtonExp } from './styled'
import { Card, Title, Img, Spinner } from 'core/components'

class List extends Component {

  renderList(list){
    return(
      <Grid>
        <Row>
          {list.map(({id, name, photo, description, status}) => (
            <Col sm={12} md={6} lg={4} xl={3} key={id}>
              <Card>
                <Card.Header>
                  <Img src={photo}/>
                </Card.Header>
                <Card.Body>
                  <Title h3>{name}</Title>
                  <span>{description}</span>
                </Card.Body>
                <Card.Footer>
                  <ButtonExp className={status}>Acessar</ButtonExp>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Grid>
    )
  }

  render() {
    return (
      <ExpContext.Consumer>
        {
          ({list, loading}) => (
            <div>
              {!loading? this.renderList(list): <Spinner />}
            </div>
          )
        }
      </ExpContext.Consumer>
    )
  }
}

export default List