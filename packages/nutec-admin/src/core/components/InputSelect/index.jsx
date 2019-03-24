import React from 'react'
import styled from 'styled-components'

const SelectWrapper = styled.select`
  border-radius: .1rem;
  outline: initial;
  padding: .75rem .75rem .5rem;
  border: 1px solid #d7d7d7;
  background: #fff;
  color: #303030;
  line-height: 1.5;
  display: block;
  box-sizing:border-box;
`

const OptionWrapper = styled.option`
  background: #fff;
  color: #303030;
`

const InputSelect = ({className, name, value, defaultValue, onChange, children, disabled, required}) => (
  <SelectWrapper
    className={className}
    name={name}
    value={value}
    onChange={onChange}
    disabled={disabled}
    defaultValue={defaultValue}
    required={required}
  >
    {children}
  </SelectWrapper>
)

const Option = ({className, value, selected, disabled, children}) => (
  <OptionWrapper
    value={value}
    disabled={disabled}
    className={className}
  >
    {children}
  </OptionWrapper>
)

InputSelect.Option = Option

export default InputSelect
