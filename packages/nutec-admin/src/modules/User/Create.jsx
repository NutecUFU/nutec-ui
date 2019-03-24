import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import styled from 'styled-components'
import { Input, Button } from 'nutec-ui'
import { Row, Col } from 'react-flexbox-grid'
import { connect } from 'react-redux'
import { actions as UserActions } from 'state/user/user-actions'

import { InputSelect } from 'core/components'

const CreateFormWrapper = styled.form`
  input, select {
    width: 100%;
    margin-bottom: .75rem;
  }
`

class Create extends Component {
  render() {
    const { createUser } = this.props
    return (
      <Form
        onSubmit={(data) => createUser(data)}
        render={({handleSubmit}) => (
          <CreateFormWrapper onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                Nome:
                <Field name="name" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="text"
                      required
                    />
                  )}
                </Field>
              </Col>
              <Col md={4}>
                Email:
                <Field name="email">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="text"
                      required
                    />
                  )}
                </Field>
              </Col>
              <Col md={4}>
                Data de Aniversário:
                <Field name="dtBirth">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="date"
                      required
                    />
                  )}
                </Field>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Field name="permission">
                  {({input, meta}) => (
                    <InputSelect {...input} required>
                      <InputSelect.Option value="" disabled selected>Selecione a permissao</InputSelect.Option>
                      <InputSelect.Option value="ADM">Administrador</InputSelect.Option>
                      <InputSelect.Option value="JR">Nutequiano</InputSelect.Option>
                      <InputSelect.Option value="DEV">Desenvolvedor</InputSelect.Option>
                    </InputSelect>
                  )}
                </Field>
              </Col>
              <Col md={4}>
                <Field name="status" required>
                  {({input, meta}) => (
                    <InputSelect {...input} required>
                      <InputSelect.Option value="" disabled selected>Selecione o status</InputSelect.Option>
                      <InputSelect.Option value="NEW_PASSWORD">Nova senha</InputSelect.Option>
                    </InputSelect>
                  )}
                </Field>
              </Col>
            </Row>

            <Button type="submit" primary>Cadastrar</Button>
          </CreateFormWrapper>
        )}
      />
    )
  }

}

const mapProps = (state) => ({

})

const mapActions = {
  createUser: UserActions.createUser,
}

export default connect(mapProps, mapActions)(Create)
