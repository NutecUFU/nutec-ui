import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Input, Button } from 'nutec-ui'
import { Row, Col } from 'react-flexbox-grid'

import { InputSelect } from 'core/components'
import { actions as ExpActions} from 'state/exp/exp-actions'

const FormWrapper = styled.form`
  input, select, textarea {
    width: 100%;
  }
`

class Create extends Component{
  render(){
    const { createExp } = this.props
    return(
      <Form
        onSubmit={(data) => createExp(data)}
        render={({handleSubmit, pristine, invalid}) => (
          <FormWrapper onSubmit={handleSubmit}>
            <Row>
              <Col md={4}>
                Nome:
                <Field name="name" required>
                  {({input, meta})=>(
                    <Input
                      {...input}
                      type="text"
                      placeholder="Nome do Experimento"/>
                  )}
                </Field>
              </Col>
              <Col md={4}>
                Domínio do Experimento:
                <Field name="domain">
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="url"
                      placeholder="dominio do experimento"/>
                  )}
                </Field>
              </Col>
              <Col md={4}>
                Status:
                <Field name="status">
                  {({input, meta}) => (
                    <InputSelect {...input} required>
                      <InputSelect.Option value="" disabled selected>Status</InputSelect.Option>
                      <InputSelect.Option value="ACTIVE">Ativo</InputSelect.Option>
                      <InputSelect.Option value="CONSTRUCT">Em Construção</InputSelect.Option>
                      <InputSelect.Option value="INACTIVE">Inativo</InputSelect.Option>
                    </InputSelect>
                  )}
                </Field>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                Descrição do Experimento:
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
              </Col>
            </Row>
            <div>
              <Button primary type="submit">Cadastrar</Button>
            </div>
          </FormWrapper>
        )}/>
    )
  }
}

const mapProps = (state) => ({

})

const mapActions = {
  createExp: ExpActions.createExp
}

export default connect(mapProps, mapActions)(Create)
