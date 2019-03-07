import React from 'react'
import styled from 'styled-components'

const NcInput = styled.input`
  border-radius: .1rem;
  border: 1px solid #a7a7a7;
  outline: none;
  height: calc(2.25rem + 2px);
  padding: 0 .5rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  width: -webkit-fill-available;
`

export const InputWrapper = styled.div`
  margin-bottom: .5rem
`

export const LabelWrapper = styled.label`
  font-size: .8rem;
  display: block;
  margin-bottom: .5rem;
`

const Input = ({label, name, value, onChange, placeholder, disabled, type, ...props}) => (
  <InputWrapper>
    <LabelWrapper>{label}</LabelWrapper>
    <NcInput
      {...props}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      type={type}
    />
  </InputWrapper>
)

export default Input