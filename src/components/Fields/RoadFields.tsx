import React, { Fragment } from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { IRoadsFields } from '../../types/state';
import { useDraft } from '../../hooks';
import { Fieldset } from './components';

interface IRoadFieldProps extends IRoadsFields {
  onSave: (fields: IRoadsFields) => void
}

export const RoadFields = (props: IRoadFieldProps) => {
  const { draft, update, publish } = useDraft<IRoadsFields>({
    ...props,
    onPublish: props.onSave
  })

  return (
    <Fieldset name={'Roads'} onSave={publish}>
      <Fragment>
        <InputNumber value={draft.culture} name='culture' onChange={update} />
      </Fragment>
    </Fieldset>
  )
}