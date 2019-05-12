import React, { useState } from 'react';
import { isNil } from 'ramda';
import { InputNumber } from '../Inputs/InputNumber'
import { IFields } from '../../types/state';

interface ITownFieldsProps {
  population: number
  workingPopulation: number
  daily3HrCollections: number
  daily9HrCollections: number

  onSave: (fields: IFields) => void
}

interface ITownFieldsState extends IFields {
  stale?: boolean
}

export interface ITownField {
  name: string
  value: number
}

const mapPropsToState = (props: ITownFieldsProps): ITownFieldsState => {
  return {
    population: props.population,
    workingPopulation: props.workingPopulation,
    daily3HrCollections: props.daily3HrCollections,
    daily9HrCollections: props.daily9HrCollections,
  }
}

export const TownFields = (props: ITownFieldsProps) => {
  const [stale, setStale] = useState(false)
  const [fields, setFields] = useState(mapPropsToState(props))

  if (stale) {
    setStale(false)
    setFields(mapPropsToState(props))
  }

  const {
    population,
    workingPopulation,
    daily3HrCollections,
    daily9HrCollections
  } = fields

  return (
    <div>
      <div>Town</div>

      <InputNumber value={population} name='population' onChange={onChange} />
      <InputNumber value={workingPopulation} name='workingPopulation' onChange={onChange} />
      <InputNumber value={daily3HrCollections} name='daily3HrCollections' onChange={onChange} />
      <InputNumber value={daily9HrCollections} name='daily9HrCollections' onChange={onChange} />

      <button onClick={onSaveClick}>Save</button>
    </div>
  )

  function onChange (change: ITownField) {
    setFields({
      ...fields,
      [change.name]: change.value
    } as any)
  }

  function onSaveClick () {
    if (isNil(props.onSave)) return

    setStale(true)

    props.onSave(fields)
  }
}