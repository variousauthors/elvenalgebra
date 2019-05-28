import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, ITownFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputInteger } from '../../Inputs';
import { Panel } from '../../../layouts'

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
        <InputInteger value={draft.population} name='population' onChange={update} />
        <InputInteger value={draft.workingPopulation} name='workingPopulation' onChange={update} />
        <InputInteger value={draft.roadsCulture} label='Roads' name='roadsCulture' onChange={update} />
      </>
    </Panel>
  )
}