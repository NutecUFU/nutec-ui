import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid'

import TeamContext from './Context'
import { Card, Img, Title, Icon, Spinner, Link } from 'core/components'

class List extends Component {

  renderList(list){
    return (
      <Grid>
        <Row>
          {
            list.map(({id, name, photo, linkedin, lattes}) => (
              <Col xs={6} sm={6} md={6} lg={4} xl={3} key={id}>
                <Card hoverable>
                  <Card.Header>
                    <Img src={photo}/>
                  </Card.Header>
                  <Card.Body>
                    <Title h4>{name}</Title>
                  </Card.Body>
                  <Card.Footer>
                    <Link.External to={linkedin} inline>
                      <Icon name="linkedin-in" size="small" categorie="brands" className="linkedin" />
                    </Link.External>
                    <Link.External to={lattes} inline>
                      <Icon name="address-card" size="small" categorie="solid" className="" />
                    </Link.External>
                  </Card.Footer>
                </Card>
              </Col>
            ))
          }
        </Row>
      </Grid>
    )
  }

  render() {
    return (
      <TeamContext.Consumer>
        {
          ({list, loading}) => (
            !loading? this.renderList(list): <Spinner />
          )
        }
      </TeamContext.Consumer>
    )
  }
}

export default List