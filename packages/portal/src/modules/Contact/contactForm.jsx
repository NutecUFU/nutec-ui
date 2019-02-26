import React, { Component } from 'react'
import { Form, Field } from 'react-final-form'
import { Grid, Row, Col } from 'react-flexbox-grid';

import { Title, Input, TextArea, Button } from '../../core/components'
import { FormWrapper } from './styled';


class ContactForm extends Component {
  render() {
    console.log(this.props.create)
    return (
      <Form
        onSubmit={(values)=> this.props.handleSubmit(values)}
        render={({ handleSubmit, pristine, submitting, invalid }) => (
          <FormWrapper onSubmit={handleSubmit}>
            <Title h2>Fale Conosco</Title>
            <Grid>
              <Row>
                <Col xs={12} sm={6}>
                  <Field
                    name="name"
                    render={({ input, meta }) => (
                      <Input
                        {...input}
                        type="text"
                        placeholder="Digite seu Nome"
                        required
                      />
                    )}
                  />
                </Col>
              
                <Col xs={12} sm={6}>
                  <Field
                    name="email"
                    render={({ input, meta }) => (
                      <Input
                        {...input}
                        type="email"
                        placeholder="Digite seu email"
                        required
                      />
                    )}
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={12}>
                  <Field
                    name="message"
                    render={({ input, meta }) => (
                      <TextArea
                        {...input}
                        placeholder="Insira aqui sua mensagem"
                        required
                      />
                    )}
                  />
                </Col>
              </Row>
              <Button type="submit" style={{width: '100%'}} disabled={submitting || pristine}>Enviar</Button>
            </Grid>
          </FormWrapper>
        )}
      />
    )
  }
}

export default ContactForm