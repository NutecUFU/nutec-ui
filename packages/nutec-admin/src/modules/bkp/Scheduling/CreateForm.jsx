import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import moment from 'moment'
import { Input, InputSelect, Button } from 'nutec-ui'

class CreateScheduleForm extends Component {

  render() {
    const {onSubmit, toggleModal, currentSlot} = this.props
    return (
      <Form
        onSubmit={onSubmit}
        render={({handleSubmit}) => (
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <Field name="name">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="Nome"
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="email">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="E-mail do usuário"
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="institution">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="Instituição..."
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="timeInit">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="time"
                      className="form-control"
                      placeholder="Horario inicio"
                    />
                  )}
                </Field>
              </div>
              <div className="col">
                <Field name="timeEnd">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="time"
                      className="form-control"
                      placeholder="Horario fim"
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col">
                <Field name="experiment">
                  {({input, meta}) => (
                    <InputSelect {...input} className="form-control">
                      <InputSelect.Option value="" disabled selected>Selecione o experimento</InputSelect.Option>
                      <InputSelect.Option value="01">Administrador</InputSelect.Option>
                      <InputSelect.Option value="02">Nutequiano</InputSelect.Option>
                    </InputSelect>
                  )}
                </Field>
              </div>
              <div className="col">
                <Field name="dtSchedule">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="Data"
                      value={moment(currentSlot).format('DD/MM/YYYY')}
                      disabled
                    />
                  )}
                </Field>
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Criar evento</button>{' '}
            <button className="btn btn-secondary" type="button" onClick={toggleModal}>Cancelar</button>
          </form>
        )}
      />

    )
  }
}

export default CreateScheduleForm
