import React from 'react';
import { isNil } from "ramda";

interface IInputNumberProps {
  name: string
  value: number

  onChange?: (changeEvent: { name: string, value: number }) => void
}

export const InputNumber = (props: IInputNumberProps) => {
  const { name, value } = props

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input value={value} name={name} type='number' onChange={onChange} />
    </div>
  )

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (isNil(props.onChange)) return

    props.onChange({
      name: props.name,
      value: parseInt(e.target.value)
    })
  }
}