import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IManaFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from './Panel'
import { InputText } from '../../Inputs';

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
        <InputNumber value={draft.mana1Hr} label='Mana Per Hour' name='mana1Hr' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}