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
                      placeholder="Nome do parceiro"/>
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="photo">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="foto do parceiro"/>
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="link">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="link do site"/>
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
