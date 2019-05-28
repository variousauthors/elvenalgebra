import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IResidenceFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputInteger } from '../../Inputs';
import { Panel } from '../../../layouts'

export const ResidencePanel = () => {
  const actions = useActionCreators(ActionCreators)
  const residenceFields = useMapState((state: IState) => state.residenceFields)

  const { draft, update, publish } = useDraft<IResidenceFields>({
    ...residenceFields,
    onPublish: actions.updateResidenceFields
  })

  const { popPerSquare } = useDerivedStats()

  return (
    <Panel
      label={'Residence'}
      hint={`Level: ${draft.level.toString()}`}
      summary={`Population/Square: ${Math.round(popPerSquare)}`}
      onSaveClicked={publish}
    >
      <>
        <InputInteger value={draft.level} label='Level' name='level' onChange={update} />
        <InputInteger value={draft.culture} name='culture' onChange={update} />
        <InputInteger value={draft.width} name='width' onChange={update} />
        <InputInteger value={draft.height} name='height' onChange={update} />
        <InputInteger value={draft.population} name='population' onChange={update} />
      </>
    </Panel>
  )
}