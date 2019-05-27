import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IResidenceFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from '../../../layouts/Panel'

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
        <InputNumber value={draft.level} label='Level' name='level' onChange={update} />
        <InputNumber value={draft.culture} name='culture' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
        <InputNumber value={draft.population} name='population' onChange={update} />
      </>
    </Panel>
  )
}