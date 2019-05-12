import React from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { IEventBuilding } from '../../types'
import { useDraft } from '../../hooks';

interface IEventBuildingFieldsProps extends IEventBuilding {
  onSave: (fields: IEventBuilding) => void
  onRemove: (fields: IEventBuilding) => void
}

export const EventBuildingFields = (props: IEventBuildingFieldsProps) => {
  const { draft, update, publish } = useDraft<IEventBuilding>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <div>
      <div>{'Event Building'}</div>

      <InputNumber value={draft.culture} name='culture' onChange={update} />
      <InputNumber value={draft.population} name='population' onChange={update} />
      <InputNumber value={draft.width} name='width' onChange={update} />
      <InputNumber value={draft.height} name='height' onChange={update} />

      <button onClick={publish}>Save</button>
      <button onClick={() => props.onRemove(props)}>Remove</button>
    </div>
  )
}