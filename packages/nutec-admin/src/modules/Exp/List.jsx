import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row, Col } from 'react-flexbox-grid'
import { Card, Spinner, Icon } from 'nutec-ui'

import { actions as ExpActions } from 'state/exp/exp-actions'
import { Header, ButtonConfirmAction } from 'core/components'

const ListWrapper = styled.div`
`

const ExpCard = styled(Card)`
  text-align: center;
  padding: 20px;
`

const ExpCardName = styled.div`
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  margin-top: 20px;
`

const DeleteWrapper = styled.div`
  position: absolute;
`

class List extends Component {

  componentDidMount(){
    this.props.getAllExp()
  }

  renderDeleteIcon(id) {
    const { deleteExp } = this.props
    return (
      <DeleteWrapper>
        <ButtonConfirmAction onConfirm={() => deleteExp(id)}>
          <Icon name="trash-alt" categorie="solid" size="tiny" />
        </ButtonConfirmAction>
      </DeleteWrapper>
    )
  }

  renderList() {
    const { list } = this.props
    return (
      <Row>
        {list && list.map(item => (
          <Col xs={12} sm={3} md={3} key={item.id}>
            <ExpCard>
              <Card.Body>
                {this.renderDeleteIcon(item.id)}
                <Icon categorie="regular" name="user" size="medium"/>
                <ExpCardName>{item.name}</ExpCardName>
              </Card.Body>
            </ExpCard>
          </Col>
        ))}
      </Row>
    )
  }

  render(){
    const { list } = this.props
    return (
      <ListWrapper>
        <Header to="/experiments/create"/>
        {list ? this.renderList(): <Spinner />}
      </ListWrapper>
    )
  }
}

const mapProps = (state) => ({
  list: state.exp.list
})

const mapActions = {
  getAllExp: ExpActions.getAllExp,
  createExp: ExpActions.createExp,
  deleteExp: ExpActions.deleteExp
}

export default connect(mapProps, mapActions)(List)