import React, { useState } from 'react';
import { isNil } from 'ramda';
import { InputNumber } from '../Inputs/InputNumber'
import { IRoadFields } from '../../types/state';

interface IRoadFieldProps {
  culture: number

  onSave: (fields: IRoadFields) => void
}

interface IDraftFields extends IRoadFields {
  stale?: boolean
}

interface ITownField {
  name: string
  value: number
}

const makeDraft = (props: IRoadFieldProps): IDraftFields => {
  return {
    culture: props.culture
  }
}

export const RoadFields = (props: IRoadFieldProps) => {
  const [stale, setStale] = useState(false)
  const [draft, updateDraft] = useState(makeDraft(props))

  if (stale) {
    resetDraft(props)
  }

  const {
    culture
  } = draft

  return (
    <div>
      <div>Town</div>

      <InputNumber value={culture} name='culture' onChange={onChange} />

      <button onClick={onSaveClick}>Save</button>
    </div>
  )

  function resetDraft (props: IRoadFieldProps) {
    setStale(false)
    updateDraft(makeDraft(props))
  }

  function onChange (change: Partial<IRoadFields>) {
    updateDraft({
      ...draft,
      ...change,
    })
  }

  function onSaveClick () {
    if (isNil(props.onSave)) return

    setStale(true)

    props.onSave(draft)
  }
}