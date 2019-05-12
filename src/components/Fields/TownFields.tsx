import React from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { ITownFields } from '../../types/state';
import { isNil } from 'ramda';
import { useDraft } from '../../hooks';

interface ITownFieldsProps {
  population: number
  workingPopulation: number
  daily3HrCollections: number
  daily9HrCollections: number

  onSave: (fields: ITownFields) => void
}

export const TownFields = (props: ITownFieldsProps) => {
  const { draft, onChange, onPublish } = useDraft<ITownFields>(props)

  return (
    <div>
      <div>{'Town'}</div>

      <InputNumber value={draft.population} name='population' onChange={onChange} />
      <InputNumber value={draft.workingPopulation} name='workingPopulation' onChange={onChange} />
      <InputNumber value={draft.daily3HrCollections} name='daily3HrCollections' onChange={onChange} />
      <InputNumber value={draft.daily9HrCollections} name='daily9HrCollections' onChange={onChange} />

      <button onClick={onSaveClick}>Save</button>
    </div>
  )

  function onSaveClick() {
    if (isNil(props.onSave)) return

    onPublish()

    props.onSave(draft)
  }
}