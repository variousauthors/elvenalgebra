import React from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { IResidenceFields } from '../../types/state';
import { useDraft } from '../../hooks';

interface IResidenceFieldProps extends IResidenceFields {
  onSave: (fields: IResidenceFields) => void
}

export const ResidenceFields = (props: IResidenceFieldProps) => {
  const { draft, update, publish } = useDraft<IResidenceFields>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <div>
      <div>{'Residence'}</div>

      <InputNumber value={draft.culture} name='culture' onChange={update} />
      <InputNumber value={draft.width} name='width' onChange={update} />
      <InputNumber value={draft.height} name='height' onChange={update} />
      <InputNumber value={draft.population} name='population' onChange={update} />

      <button onClick={publish}>Save</button>
    </div>
  )

}