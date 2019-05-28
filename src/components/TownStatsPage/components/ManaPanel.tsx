import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IManaFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { Panel } from '../../../layouts'
import { InputText, InputInteger } from '../../Inputs';

export const ManaPanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.manaFields)

  const { draft, update, publish } = useDraft<IManaFields>({
    ...fields,
    onPublish: actions.updateManaFields
  })

  const { manaPerHrPerSquare } = useDerivedStats()

  return (
    <Panel
      label={'Mana'}
      hint={draft.name}
      summary={`Hourly Mana/Square: ${Math.round(manaPerHrPerSquare)}`}
      onSaveClicked={publish}
    >
      <>
        <InputText value={draft.name} label='name' onChange={(value) => update({ name: value })} />
        <InputInteger value={draft.mana1Hr} label='Mana Per Hour' name='mana1Hr' onChange={update} />
        <InputInteger value={draft.width} name='width' onChange={update} />
        <InputInteger value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}