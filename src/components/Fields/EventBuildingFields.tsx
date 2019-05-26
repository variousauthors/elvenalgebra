import React from 'react';
import { InputNumber, InputText } from '../Inputs'
import { IEventBuilding } from '../../types'
import { useDraft } from '../../hooks';
import { Typography } from '@material-ui/core';
import { isEmpty } from 'ramda';

interface IEventBuildingFieldsProps extends IEventBuilding {
  onSave: (fields: IEventBuilding) => void
  onRemove: (fields: IEventBuilding) => void
}

export const EventBuildingFields = React.memo((props: IEventBuildingFieldsProps) => {
  const { draft, update, publish } = useDraft<IEventBuilding>({
    ...props,
    onPublish: props.onSave
  })

  const title = isEmpty(draft.name) ? '???' : draft.name

  const handleEnterDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') return

    publish()
  }

  return (
    <div onKeyDown={handleEnterDown}>
      <Typography variant='h5'>{title}</Typography>

      <InputText value={draft.name} label='Building Name' onChange={(value) => update({ name: value })} />
      <InputNumber value={draft.culture} name='culture' onChange={update} />
      <InputNumber value={draft.population} name='population' onChange={update} />
      <InputNumber value={draft.supply} name='supply' onChange={update} />
      <InputNumber value={draft.width} name='width' onChange={update} />
      <InputNumber value={draft.height} name='height' onChange={update} />

      <button onClick={publish}>Save</button>
      <button onClick={() => props.onRemove(props)}>Remove</button>
    </div>
  )
}
) 