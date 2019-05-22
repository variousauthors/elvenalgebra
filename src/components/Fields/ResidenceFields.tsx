import React, { Fragment } from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { IResidenceFields } from '../../types/state';
import { useDraft } from '../../hooks';
import { Fieldset } from './components';

interface IResidenceFieldProps extends IResidenceFields {
  onSave: (fields: IResidenceFields) => void
}

export const ResidenceFields = (props: IResidenceFieldProps) => {
  const { draft, update, publish } = useDraft<IResidenceFields>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <Fieldset name={'Residence'} onSave={publish}>
      <Fragment>
        <InputNumber value={draft.culture} name='culture' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
        <InputNumber value={draft.population} name='population' onChange={update} />
      </Fragment>
    </Fieldset>
  )
}