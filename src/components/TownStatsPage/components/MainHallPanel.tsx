import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from '../../../layouts/Panel'

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
      summary={`Supply Cap: ${1}`}
      onSaveClicked={publish}
    >
      <>
        <InputNumber value={draft.level} name='level' onChange={update} />
        <InputNumber value={draft.population} name='population' onChange={update} />
        <InputNumber value={draft.culture} name='culture' onChange={update} />
        <InputNumber value={draft.supplyCapacity} name='supplyCapacity' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}