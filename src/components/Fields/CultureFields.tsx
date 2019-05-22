import React from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { ICultureFields } from '../../types'
import { useDraft } from '../../hooks';

interface ICultureFieldProps extends ICultureFields {
  onSave: (fields: ICultureFields) => void
}

export const CultureFields = (props: ICultureFieldProps) => {
  const { draft, update, publish } = useDraft<ICultureFields>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <div>
      <div>{'Culture'}</div>

      <InputNumber value={draft.culture} name='culture' onChange={update} />
      <InputNumber value={draft.width} name='width' onChange={update} />
      <InputNumber value={draft.height} name='height' onChange={update} />

      <button onClick={publish}>Save</button>
    </div>
  )
}