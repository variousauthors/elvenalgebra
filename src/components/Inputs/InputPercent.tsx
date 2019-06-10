import React, { useState } from 'react';
import { isNil } from "ramda";
import * as uuid from 'uuid'

const useUUID = () => {
  const [value] = useState(uuid.v4())

  return value
}

interface IInputPercentProps {
  label: string
  value: number

  step?: string
  readOnly?: boolean
  onChange?: (value: number) => void
}

export const InputPercent = (props: IInputPercentProps) => {
  const uuid = useUUID()
  const { label } = props
  const value = props.value * 100

  return (
    <div>
      <label htmlFor={uuid}>{label}</label>
      <input value={value} id={uuid} step='1' type='number' onChange={onChange} readOnly={props.readOnly} />
    </div>
  )

  function onChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (isNil(props.onChange)) return

    props.onChange(parseFloat(e.target.value) / 100)
  }
}