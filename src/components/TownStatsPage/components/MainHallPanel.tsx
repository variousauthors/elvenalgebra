import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputInteger } from '../../Inputs';
import { Panel } from '../../../layouts'

export const MainHallPanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.mainHallFields)

  const { draft, update, publish } = useDraft({
    ...fields,
    onPublish: actions.updateMainHallFields
  })

  return (
    <Panel
      label={'Main Hall'}
      hint={`Level: ${draft.level}`}
      summary={`Supply Cap: ${draft.supplyCapacity}`}
      onSaveClicked={publish}
    >
      <>
        <InputInteger value={draft.level} name='level' onChange={update} />
        <InputInteger value={draft.population} name='population' onChange={update} />
        <InputInteger value={draft.culture} name='culture' onChange={update} />
        <InputInteger value={draft.supplyCapacity} name='supplyCapacity' onChange={update} />
        <InputInteger value={draft.width} name='width' onChange={update} />
        <InputInteger value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}