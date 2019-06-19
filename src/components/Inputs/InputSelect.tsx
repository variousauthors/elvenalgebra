import * as React from 'react'
import { useUUID } from '../../hooks';
import { isNil } from 'ramda';

interface ISelectOption {
  value: string
  label: string
}

interface IInputSelectProps {
  value: string
  label: string
  options: ISelectOption[]

  onChange: (value: string) => void
}

export const InputSelect = (props: IInputSelectProps) => {
  const uuid = useUUID()

  const options = props.options.map((option) => {
    return <option value={option.value} key={option.value}>{option.label}</option>
  })

  return (
    <div>
      <label htmlFor={uuid}>{props.label}</label>
      <select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
        {options}
      </select>
    </div>
  )
}