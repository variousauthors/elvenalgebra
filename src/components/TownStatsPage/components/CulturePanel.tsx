import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { Panel } from '../../../layouts'
import { InputText, InputInteger } from '../../Inputs';

export const CulturePanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.cultureFields)

  const { draft, update, publish } = useDraft({
    ...fields,
    onPublish: actions.updateCultureFields
  })

  const { culturePerSquare } = useDerivedStats()

  return (
    <Panel label={'Culture'} hint={draft.name} summary={`Culture/Square: ${culturePerSquare}`} onSaveClicked={publish}>
      <>
        <InputText value={draft.name} label='name' onChange={(value) => update({ name: value })} />
        <InputInteger value={draft.culture} name='culture' onChange={update} />
        <InputInteger value={draft.width} name='width' onChange={update} />
        <InputInteger value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}