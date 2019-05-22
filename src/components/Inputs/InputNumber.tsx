import React from 'react';
import { isNil } from "ramda";

interface IInputNumberProps {
  name: string
  value: number

  readOnly?: boolean
  onChange?: (changeEvent: { [key: string]: number }) => void
}

export const InputNumber = (props: IInputNumberProps) => {
  const { name, value } = props

  return (
    <div>
      <label htmlFor={name}>{name}</label>
      <input value={value} name={name} type='number' onChange={onChange} readOnly />
    </div>
  )

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (isNil(props.onChange)) return

    props.onChange({
      [props.name]: parseInt(e.target.value)
    })
  }
}