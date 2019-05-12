import React from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { ITownFields } from '../../types/state';
import { useDraft } from '../../hooks';

interface ITownFieldsProps extends ITownFields {
  onSave: (fields: ITownFields) => void
}

export const TownFields = (props: ITownFieldsProps) => {
  const { draft, update, publish } = useDraft<ITownFields>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <div>
      <div>{'Town'}</div>

      <InputNumber value={draft.population} name='population' onChange={update} />
      <InputNumber value={draft.workingPopulation} name='workingPopulation' onChange={update} />
      <InputNumber value={draft.daily3HrCollections} name='daily3HrCollections' onChange={update} />
      <InputNumber value={draft.daily9HrCollections} name='daily9HrCollections' onChange={update} />

      <button onClick={publish}>Save</button>
    </div>
  )
}