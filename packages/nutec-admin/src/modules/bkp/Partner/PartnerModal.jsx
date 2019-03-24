import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import "./style.scss"

import { ButtonConfirmAction } from 'nutec-ui'

class PartnerModal extends Component {

  render() {
    const { statusModal, toggleModal, partner, onDelete } = this.props
    const { id, name, link, photo } = partner
    return(
      <Modal isOpen={statusModal} toggle={toggleModal} className="user_modal">
        <ModalHeader toggle={toggleModal}>Informações do Parceiro</ModalHeader>
        <ModalBody>
          <div><strong>Nome: </strong>{name}</div>
          <div><strong>Link: </strong><br/>{link}</div>
          <div><strong>Foto: </strong>{photo}</div>
        </ModalBody>
        <ModalFooter>
        <ButtonConfirmAction className="edit-item-confirm" onConfirm={() => onDelete(id)}>
          <Button color="danger">Excluir Parceiro</Button>
        </ButtonConfirmAction>{' '}
          <Button color="secondary" onClick={toggleModal}>Sair</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default PartnerModal
