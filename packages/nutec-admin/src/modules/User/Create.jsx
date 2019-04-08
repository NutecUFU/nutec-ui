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
                Primeiro nome:
                <Field name="first_name" required>
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
                Último nome:
                <Field name="last_name" required>
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
            </Row>
            <Row>
              <Col md={4}>
                Senha:
                <Field name="password">
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
                Username:
                <Field name="username">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="text"
                      required
                    />
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
