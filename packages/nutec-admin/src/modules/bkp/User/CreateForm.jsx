import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Input, InputSelect, Button } from 'nutec-ui'

class CreateForm extends Component {

  render() {
    const { submitForm, toggleModal } = this.props;
    return (
      <Form
        onSubmit={(data)=> submitForm(data)}
        render={({handleSubmit, pristine, invalid}) => (
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <Field name="name" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      placeholder="Nome de usuário"
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
                      type="email"
                      className="form-control"
                      placeholder="E-mail do usuário"
                    />
                  )}
                </Field>
              </div>
              <div className="col">
                <Field name="dtBirth">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="date"
                      className="form-control"
                    />
                  )}
                </Field>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <Field name="permission">
                  {({input, meta}) => (
                    <InputSelect {...input} className="form-control">
                      <InputSelect.Option value="" disabled selected>Selecione a permissao</InputSelect.Option>
                      <InputSelect.Option value="ADM">Administrador</InputSelect.Option>
                      <InputSelect.Option value="JR">Nutequiano</InputSelect.Option>
                      <InputSelect.Option value="DEV">Desenvolvedor</InputSelect.Option>
                    </InputSelect>
                  )}
                </Field>
              </div>
              <div className="col">
                <Field name="status">
                  {({input, meta}) => (
                    <InputSelect {...input} className="form-control">
                      <InputSelect.Option value="" disabled selected>Selecione o status</InputSelect.Option>
                      <InputSelect.Option value="NEW_PASSWORD">Nova senha</InputSelect.Option>
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
        )}
      />

    )
  }
}

export default CreateForm
