import React, { Component } from 'react'

import { Card, Title, Icon, Link } from '../../nutec-ui'

class CardPortal extends Component {
  render(){
    const {item} = this.props
    const {photo, name, linkedin, lattes} = item
    return (
      <Card hoverable>
        <Card.ImgTop src={photo}/>
        <Card.Body>
          <Title h4>{name}</Title>
        </Card.Body>
        <Card.Footer>
          <Link.External to={linkedin} target="_blank">
            <Icon name="linkedin" categorie="brands" size="small"/>
          </Link.External>
          <Link.External to={lattes}>
            <Icon name="id-card" categorie="solid" size="small"/>
          </Link.External>
        </Card.Footer>
      </Card>
    )
  }
}

export default CardPortal
