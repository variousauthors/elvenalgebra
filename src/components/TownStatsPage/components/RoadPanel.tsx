import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IRoadsFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from './Panel'

export const RoadPanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.roadFields)

  const { draft, update, publish } = useDraft<IRoadsFields>({
    ...fields,
    onPublish: actions.updateRoadFields
  })

  return (
    <Panel label={'Roads'} summary={''} onSaveClicked={publish}>
      <>
        <InputNumber value={draft.culture} name='culture' onChange={update} />
      </>
    </Panel>
  )
}