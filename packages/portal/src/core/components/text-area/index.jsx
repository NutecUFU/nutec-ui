import React from 'react'
import styled from 'styled-components'

import { InputWrapper, LabelWrapper } from '../input'

const TextAreaWrapper = styled.textarea`
  width: -webkit-fill-available;
  border-radius: .1rem;
  border: 1px solid #a7a7a7;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  padding: .5rem .5rem;
`

const TextArea = ({label, name, rows, cols, disabled, placeholder, required, ...props}) => (
  <InputWrapper>
    <LabelWrapper>{label}</LabelWrapper>
    <TextAreaWrapper {...props}
      name={name}
      rows={rows}
      cols={cols}
      disabled={disabled}
      placeholder={placeholder}
      required={required}
    />
  </InputWrapper>
)

export default TextArea