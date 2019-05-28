import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IWorkshopFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputInteger } from '../../Inputs';
import { Panel } from '../../../layouts'

export const WorkshopPanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.workshopFields)

  const { draft, update, publish } = useDraft<IWorkshopFields>({
    ...fields,
    onPublish: actions.updateWorkshopFields
  })

  const { supplyPer24HrPerSquare } = useDerivedStats()

  return (
    <Panel
      label={'Workshop'}
      hint={`Level: ${draft.level.toString()}`}
      summary={`Daily Supply/Square: ${Math.round(supplyPer24HrPerSquare)}`}
      onSaveClicked={publish}
    >
      <>
        <InputInteger value={draft.level} label='Level' name='level' onChange={update} />
        <InputInteger value={draft.population} label='Population' name='population' onChange={update} />
        <InputInteger value={draft.culture} label='Culture' name='culture' onChange={update} />
        <InputInteger value={draft.supply3Hr} label='3 HR' name='supply3Hr' onChange={update} />
        <InputInteger value={draft.supply9Hr} label='9 HR' name='supply9Hr' onChange={update} />
        <InputInteger value={draft.width} name='width' onChange={update} />
        <InputInteger value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}