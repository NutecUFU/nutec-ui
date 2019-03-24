import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Input, InputSelect, Button } from 'nutec-ui'

class CreateForm extends Component{
  render(){
    const { submitForm, toggleModal } = this.props
    return(
      <Form
        onSubmit={(data) => submitForm(data)}
        render={({handleSubmit, pristine, invalid}) => (
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <Field name="name" required>
                  {({input, meta})=>(
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="Nome do Experimento"/>
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="domain">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="dominio do experimento"/>
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="description">
                  {({input, meta}) => (
                    <textarea
                      {...input}
                      rows="4"
                      cols="50"
                      className="form-control"
                      placeholder="Descrição"/>
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="status">
                  {({input, meta}) => (
                    <InputSelect {...input} className="form-control">
                      <InputSelect.Option value="" disabled selected>Status</InputSelect.Option>
                      <InputSelect.Option value="ACTIVE">Ativo</InputSelect.Option>
                      <InputSelect.Option value="CONSTRUCT">Em Construção</InputSelect.Option>
                      <InputSelect.Option value="INACTIVE">Inativo</InputSelect.Option>
                    </InputSelect>
                  )}
                </Field>
              </div>
            </div>
            <div className="d-flex justify-content-center py-3">
              <Button onClick={toggleModal} className="mr-2" color="secondary" type="button">Cancelar</Button>
              <Button color="primary" type="submit">Cadastrar</Button>
            </div>
          </form>
        )}/>
    )
  }
}

export default CreateForm
