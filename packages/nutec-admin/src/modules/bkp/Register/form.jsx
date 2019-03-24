import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Input, InputWrapper, Button, InputSelect } from 'nutec-ui'

class RegisterForm extends Component {
  render(){
    const { handleSubmit } = this.props
    return(
      <Form
        onSubmit={(data) => handleSubmit(data)}
        render={({handleSubmit, pristine, invalid}) => (
          <form onSubmit={handleSubmit}>
            <InputWrapper
                label="Email">
                <Field name="email">
                    {({input, meta}) => (
                      <Input
                        {...input}
                        className="form-control"
                        type="email"
                        id="email"
                        placeholder="Digite seu email"/>
                    )}
                  </Field>
            </InputWrapper>
            <InputWrapper
                label="Nome">
                <Field name="name">
                    {({input, meta}) => (
                      <Input
                        {...input}
                        className="form-control"
                        type="text"
                        id="name"
                        placeholder="Digite seu nome"/>
                    )}
                  </Field>
            </InputWrapper>
            <InputWrapper
                label="Senha">
                <Field name="password">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      type="password"
                      id="password"
                      placeholder="Digite sua senha"/>
                  )}
                </Field>
            </InputWrapper>
            <InputWrapper
                label="Data de Nascimento">
                <Field name="dtBirth">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      className="form-control"
                      type="date"
                      id="data"/>
                  )}
                </Field>
            </InputWrapper>

            <InputWrapper
              label="Permissão">
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
            </InputWrapper>

            <Button
              className="btn-block mb-3"
              type="primary">
              Cadastrar
            </Button>
          </form>
        )}/>
    )
  }
}


export default RegisterForm
