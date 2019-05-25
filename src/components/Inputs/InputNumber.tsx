import React from 'react';
import { isNil } from "ramda";
import { useUUID } from '../../hooks';

interface IInputNumberProps {
  label?: string
  value: number

  /** deprecated */
  name: string
  readOnly?: boolean
  onChange?: (changeEvent: { [key: string]: number }) => void
}

export const InputNumber = (props: IInputNumberProps) => {
  const { name, label, value } = props
  const uuid = useUUID()

  const labelText = isNil(label) ? name : label

  return (
    <div>
      <label htmlFor={uuid}>{labelText}</label>
      <input value={value} id={uuid} type='number' onChange={onChange} readOnly={props.readOnly} />
    </div>
  )

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (isNil(props.onChange)) return

    props.onChange({
      [props.name]: parseInt(e.target.value)
    })
  }
}