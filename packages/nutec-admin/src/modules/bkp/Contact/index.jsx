import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContactWrapper } from './styled'

import { actions as contactActions } from '../../state/contact/contact-actions'
import List from './List';

class Contact extends Component {

  componentDidMount(){
    this.props.getAll()
  }

  render(){
    const { contacts } = this.props
    return (
      <ContactWrapper>
        <div className="row">
          {contacts && contacts.map(contact => (
            <List
              key={contact.id}
              {...contact}
              deleteItem={(id)=> this.props.deleteContact(id)}
            />
          ))}
          
        </div>
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