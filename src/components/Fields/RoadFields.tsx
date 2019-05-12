import React from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { isNil } from 'ramda';
import { IRoadFields } from '../../types/state';
import { useDraft } from '../../hooks';

interface IRoadFieldProps {
  culture: number

  onSave: (fields: IRoadFields) => void
}

export const RoadFields = (props: IRoadFieldProps) => {
  const { draft, onChange, onPublish } = useDraft<IRoadFields>(props)

  return (
    <div>
      <div>{'Roads'}</div>

      <InputNumber value={draft.culture} name='culture' onChange={onChange} />

      <button onClick={onSaveClick}>Save</button>
    </div>
  )

  function onSaveClick() {
    if (isNil(props.onSave)) return

    onPublish()

    props.onSave(draft)
  }
}