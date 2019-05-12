import React from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { IRoadsFields } from '../../types/state';
import { useDraft } from '../../hooks';

interface IRoadFieldProps extends IRoadsFields {
  onSave: (fields: IRoadsFields) => void
}

export const RoadFields = (props: IRoadFieldProps) => {
  const { draft, update, publish } = useDraft<IRoadsFields>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <div>
      <div>{'Roads'}</div>

      <InputNumber value={draft.culture} name='culture' onChange={update} />

      <button onClick={publish}>Save</button>
    </div>
  )
}