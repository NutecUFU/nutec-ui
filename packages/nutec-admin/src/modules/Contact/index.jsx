import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Row } from 'react-flexbox-grid'

import { actions as contactActions } from 'state/contact/contact-actions'
import List from './List'

const ContactWrapper = styled.div``

class Contact extends Component {

  componentDidMount(){
    this.props.getAll()
  }

  render(){
    const { contacts } = this.props
    return (
      <ContactWrapper>
        <Row>
          {contacts && contacts.map(contact => (
            <List
              key={contact.id}
              {...contact}
              deleteItem={(id)=> this.props.deleteContact(id)}
            />
          ))}
        </Row>
      </ContactWrapper>
    )
  }
  
}

const mapProps = (state) => ({
  contacts: state.contact.list
})

const mapActions = {
  getAll: contactActions.getAllContacts,
  deleteContact: contactActions.deleteContact
}

export default connect(mapProps, mapActions)(Contact)