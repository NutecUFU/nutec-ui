import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import "./style.scss"

import { ButtonConfirmAction } from 'nutec-ui'

class ExpModal extends Component {

  render() {
    const { statusModal, toggleModal, experiment, onDelete } = this.props
    const { id, name, description, domain, status } = experiment
    return(
      <Modal isOpen={statusModal} toggle={toggleModal} className="user_modal">
        <ModalHeader toggle={toggleModal}>Informações do Experimento</ModalHeader>
        <ModalBody>
          <div><strong>Nome: </strong>{name}</div>
          <div><strong>Descrição: </strong><br/>{description}</div>
          <div><strong>Domínio: </strong>{domain}</div>
          <div><strong>Status: </strong>{status}</div>
        </ModalBody>
        <ModalFooter>
        <ButtonConfirmAction className="edit-item-confirm" onConfirm={() => onDelete(id)}>
          <Button color="danger">Excluir Experimento</Button>
        </ButtonConfirmAction>{' '}
          <Button color="secondary" onClick={toggleModal}>Sair</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ExpModal
