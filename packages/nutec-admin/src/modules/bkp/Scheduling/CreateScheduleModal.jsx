import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import "./style.scss"

class CreateScheduleModal extends Component {

  render() {
    const { status, toggleModal, children } = this.props
    return(
      <Modal isOpen={status} toggle={toggleModal} className="user_modal">
        <ModalHeader toggle={toggleModal}>Evento</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    )
  }
}

export default CreateScheduleModal
