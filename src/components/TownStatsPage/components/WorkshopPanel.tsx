import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IWorkshopFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from '../../../layouts/Panel'

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
        <InputNumber value={draft.level} label='Level' name='level' onChange={update} />
        <InputNumber value={draft.population} label='Population' name='population' onChange={update} />
        <InputNumber value={draft.culture} label='Culture' name='culture' onChange={update} />
        <InputNumber value={draft.supply3Hr} label='3 HR' name='supply3Hr' onChange={update} />
        <InputNumber value={draft.supply9Hr} label='9 HR' name='supply9Hr' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}