import React, { Component } from 'react'
import { connect } from 'react-redux'

import { ContactWrapper } from './styled'
import ContactForm from './contactForm'
import { actions as ContactActions} from '../../state/contact/contact-actions'


class Contact extends Component{
  render(){
    return(
      <ContactWrapper>
        <ContactForm 
          handleSubmit={(data) => this.props.createContact(data)}
          create={this.props.form}
        />
      </ContactWrapper>
    )
  }
}

const mapProps = (state) => ({
  form: state.contact.create
})

const mapActions = {
  createContact: ContactActions.createContact
} 

export default connect(mapProps, mapActions)(Contact)