import React, { useState } from 'react';
import { isNil } from "ramda";
import * as uuid from 'uuid'

const useUUID = () => {
  const [value] = useState(uuid.v4())

  return value
}

interface IInputTextProps {
  label: string
  value: string

  readOnly?: boolean
  onChange?: (value: string) => void
}

export const InputText = (props: IInputTextProps) => {
  const uuid = useUUID()
  const { label, value } = props

  return (
    <div>
      <label htmlFor={uuid}>{label}</label>
      <input value={value} id={uuid} type='text' onChange={onChange} readOnly={props.readOnly} />
    </div>
  )

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (isNil(props.onChange)) return

    props.onChange(e.target.value)
  }
}