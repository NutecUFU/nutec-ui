import React, { Component } from 'react'
import { Button } from 'nutec-ui'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
`

class ButtonConfirmAction extends Component {

  constructor(props) {
    super(props)
    this.state = {isOptions: false}
  }

  renderOptions() {
    const { onConfirm } = this.props
    return (
      <ButtonWrapper>
        <small>Tem certeza?</small>
        <Button onClick={() => this.toggleOptions()} className="mr-2" color="secondary" type="button">Não</Button>
        <Button onClick={() => onConfirm()} type="submit" primary>Sim</Button>
      </ButtonWrapper>
    )
  }

  toggleOptions() {
    this.setState({
      isOptions: !this.state.isOptions
    })
  }

  render() {
    const { children } = this.props
    const { isOptions } = this.state
    return (
      <div>
        { isOptions && this.renderOptions() }
        { !isOptions && (<div onClick={() => this.toggleOptions()}>
          {children}
        </div>
        )}
      </div>
    )
  }
}

export default ButtonConfirmAction
