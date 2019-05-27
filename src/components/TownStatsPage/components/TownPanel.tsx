import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, ITownFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from '../../../layouts/Panel'

export const TownPanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.townFields)

  const { draft, update, publish } = useDraft<ITownFields>({
    ...fields,
    onPublish: actions.updateTownFields
  })

  return (
    <Panel label={'Town'} summary={'Ol\' Town'} onSaveClicked={publish}>
      <>
        <InputNumber value={draft.population} name='population' onChange={update} />
        <InputNumber value={draft.workingPopulation} name='workingPopulation' onChange={update} />
        <InputNumber value={draft.roadsCulture} label='Roads' name='roadsCulture' onChange={update} />
      </>
    </Panel>
  )
}