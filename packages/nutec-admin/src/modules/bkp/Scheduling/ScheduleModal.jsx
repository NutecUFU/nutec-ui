import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import "./style.scss"

class ScheduleModal extends Component {

  render() {
    const { status, toggleModal, schedule, onDelete } = this.props
    const { id, name, email, institution, dtSchedule, timeInit, timeEnd, register, experiment } = schedule
    return(
      <Modal isOpen={status} toggle={toggleModal} className="user_modal">
        <ModalHeader toggle={toggleModal}>Cadastro de Usuário</ModalHeader>
        <ModalBody>
          <div><strong>Nome: </strong>{name}</div>
          <div><strong>Email: </strong>{email}</div>
          <div><strong>Instituto: </strong>{institution}</div>
          <div><strong>Dia: </strong>{dtSchedule}</div>
          <div><strong>Inicio: </strong>{timeInit}</div>
          <div><strong>Fim: </strong>{timeEnd}</div>
          <div><strong>ID: </strong>{register}</div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={() => onDelete(id)}>Cancelar Evento</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    )
  }
}

export default ScheduleModal
