import React from 'react'
import styled from 'styled-components'


const InputWrapper = styled.input`
  border-radius: .1rem;
  outline: initial;
  font-size: .8rem;
  padding: .75rem .75rem .5rem;
  border: 1px solid #d7d7d7;
  background: #fff;
  color: #303030;
  line-height: 1.5;
  display: block;
  box-sizing:border-box;
`

const Input = ({className, name, value, onChange, placeholder, disabled, type}) => (
  <InputWrapper
    className={className}
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    disabled={disabled}
    type={type}
  />
)

export default Input
