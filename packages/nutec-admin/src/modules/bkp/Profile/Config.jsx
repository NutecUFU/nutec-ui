import React, { Component } from 'react'
import { InputWrapper, Input, Icon, Button } from '../../nutec-ui';
import { FormWrapper } from './styled';
import { Form, Field } from 'react-final-form';

class Config extends Component{
  render(){
    const { profile, handleSubmit } = this.props
    const { id, name, email, linkedin, lattes } = profile
    return (
      <FormWrapper>
        <Form
          initialValues={{}}
          onSubmit={(data)=> {
            handleSubmit(id, data)
          }}
          render={({handleSubmit, submitting, pristine, form}) => (
            <form onSubmit={handleSubmit} >
              <InputWrapper label="Nome:">
                <Field name="name" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      name="name"
                      type="text"
                      placeholder={name}
                      disabled={submitting}
                  />
                  )}
                </Field>
              </InputWrapper>
              <InputWrapper label="Email:">
                <Field name="email" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      name="email"
                      type="email"
                      placeholder={email}
                      disabled={submitting}
                  />
                  )}
                </Field>
              </InputWrapper>
              <InputWrapper label="Nova Senha:">
                <Field name="password" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      name="password"
                      type="password"
                      disabled={submitting}
                  />
                  )}
                </Field>
              </InputWrapper>
              <InputWrapper>
                <Icon name="linkedin" categorie="brands" size="medium"/>
                <Field name="linkedin" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      name="linkedin"
                      type="url"
                      placeholder={linkedin ? linkedin:`Link para perfil no linkedin`}
                      disabled={submitting}
                  />
                  )}
                </Field>
              </InputWrapper>
              <InputWrapper>
                <Icon name="file-invoice" categorie="solid" size="medium"/>
                <Field name="lattes" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      name="lattes"
                      type="text"
                      placeholder={lattes? lattes:`Link para curriculo lattes`}
                      disabled={submitting}
                    />
                  )}
                </Field>
              </InputWrapper>
              <Button
                color="primary"
                type="submit"
                disabled={submitting || pristine}
              >
                Atualizar
              </Button>
            </form>
          )}
        />
      </FormWrapper>
    )
  }
}

export default Config
