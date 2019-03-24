import React, { Component } from 'react'
import styled from 'styled-components'
import { Form, Field } from 'react-final-form'
import { Input, Button } from 'nutec-ui'

const FormWrapper = styled.form`
`

const CustomInput = styled(Input)`
  width: 100%;
  margin-top: 10px;
`

const CustomButton = styled(Button)`
  margin: 20px 0;
  width: 100%;
`

class LoginForm extends Component {

  render() {
    const {onSubmit, type} = this.props
    return (
      <Form
        onSubmit={(data)=> onSubmit(data)}
        render={({handleSubmit, pristine, invalid}) => (
          <FormWrapper onSubmit={handleSubmit}>
            <Field name="email" required>
              {({input, meta}) => (
                <CustomInput
                  {...input}
                  type="email"
                  placeholder="Nome de usuário"
                />
              )}
            </Field>
            {type ==='ACTIVE' && (
              <Field name="password" required>
                {({input, meta}) => (
                  <CustomInput 
                    {...input}
                    type="password"
                    placeholder="Senha..."/>
                )}
              </Field>
            )}
            {type ==='NO_PASSWORD' && (
              <Field name="password" required>
                {({input, meta}) => (
                  <CustomInput 
                    {...input}
                    type="password"
                    placeholder="Confirme sua senha..."/>
                )}
              </Field>
            )}
            <CustomButton primary type="submit">Entrar</CustomButton>
          </FormWrapper>
        )}
      />
    )
  }
}

export default LoginForm
