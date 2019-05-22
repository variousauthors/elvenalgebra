import React, { Fragment } from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { ICultureFields } from '../../types'
import { useDraft } from '../../hooks';
import { Fieldset } from './components';

interface ICultureFieldProps extends ICultureFields {
  onSave: (fields: ICultureFields) => void
}

export const CultureFields = (props: ICultureFieldProps) => {
  const { draft, update, publish } = useDraft<ICultureFields>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <Fieldset name={'Culture'} onSave={publish}>
      <Fragment>
        <InputNumber value={draft.culture} name='culture' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
      </Fragment>
    </Fieldset>
  )
}