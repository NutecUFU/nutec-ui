import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

class UserModal extends Component{
  render(){
    const { status, toggleModal, children } = this.props
    return(
      <Modal isOpen={status} centered toggle={toggleModal} className="user_modal">
        <ModalHeader toggle={toggleModal}>Cadastro de Usuário</ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
      </Modal>
    )
  }
}

export default UserModal
