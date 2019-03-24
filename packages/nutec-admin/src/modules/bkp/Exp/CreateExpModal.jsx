import React, { Component } from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'

class CreateExpModal extends Component {
  render(){
    const { status, toggleModal, children } = this.props
    return (
      <Modal isOpen={status} centered toggle={toggleModal} className="exp_modal">
        <ModalHeader toggle={toggleModal}>Cadastro de Experimento</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    )
  }
}

export default CreateExpModal