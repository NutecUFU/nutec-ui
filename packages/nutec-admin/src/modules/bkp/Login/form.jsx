import React, {Component} from 'react'
import { Form, Field } from 'react-final-form'
import { Input, InputSelect, Button } from 'nutec-ui'
import { Link } from 'react-router-dom'

class LoginForm extends Component {

  render() {
    const { submitForm, status } = this.props
    return (
      <Form
        onSubmit={(data)=> submitForm(data)}
        render={({handleSubmit, pristine, invalid}) => (
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <Field name="email" required>
                  {({input, meta}) => (
                    <Input
                      {...input}
                      type="email"
                      className="form-control"
                      placeholder="Nome de usuário"
                    />
                  )}
                </Field>
              </div>
            </div>
              {(status === 'ACTIVE'  || status === 'NEW_PASSWORD') && (
                <div className="row mb-3">
                  <div className="col">
                    <Field name="password" required>
                      {({input, meta}) => (
                        <Input
                          {...input}
                          type="password"
                          className="form-control"
                          placeholder="Sua senha"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              )}
              {status === 'NEW_PASSWORD' && (
                <div className="row mb-3">
                  <div className="col">
                    <Field name="confirmPassword" required>
                      {({input, meta}) => (
                        <Input
                          {...input}
                          type="password"
                          className="form-control"
                          placeholder="Confirme sua senha"
                        />
                      )}
                    </Field>
                  </div>
                </div>
              )}
            <div className="d-flex justify-content-center py-3">
              <Button color="primary" type="submit">Entrar</Button>
            </div>
            <div className="text-center">
              <small className="text-muted text-center">
                Não tem uma conta ainda? <Link to="/register">Cadastre-se</Link>.
              </small>
            </div>
          </form>
        )}
      />
    )
  }

}

export default LoginForm
