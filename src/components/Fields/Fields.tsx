import React, { useState } from 'react';
import { isNil } from 'ramda';

export function makeFields <TProps>() {
  interface IBaseProps {
    label: string
    onSave: (fields: TProps) => void
    children: (props: { fields: TProps, setFields: (props: Partial<TProps>) => void}) => JSX.Element
  }

  const makeDraft = (props: TProps) => {
    return {
      ...props
    }
  }

  return (props: TProps & IBaseProps) => {
    const [stale, setStale] = useState(false)
    const [draft, updateDraft] = useState(makeDraft(props))

    if (stale) {
      resetDraft(props)
    }

    return (
      <div>
        <div>{props.label}</div>

        {props.children({
          fields: draft,
          setFields: onChange
        })}

        <button onClick={onSaveClick}>Save</button>
      </div>
    )

    function resetDraft(props: TProps) {
      setStale(false)
      updateDraft(makeDraft(props))
    }

    function onChange(change: Partial<TProps>) {
      updateDraft({
        ...draft,
        ...change,
      })
    }

    function onSaveClick() {
      if (isNil(props.onSave)) return

      setStale(true)

      props.onSave(draft)
    }
  }
}