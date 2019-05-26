import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, ICultureFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from './Panel'
import { InputText } from '../../Inputs';

export const CulturePanel = () => {
  const actions = useActionCreators(ActionCreators)
  const cultureFields = useMapState((state: IState) => state.cultureFields)

  const { draft, update, publish } = useDraft<ICultureFields>({
    ...cultureFields,
    onPublish: actions.updateCultureFields
  })

  const { culturePerSquare } = useDerivedStats()

  return (
    <Panel label={'Culture'} hint={draft.name} summary={`Culture/Square: ${culturePerSquare}`} onSaveClicked={publish}>
      <>
        <InputText value={draft.name} label='name' onChange={(value) => update({ name: value })} />
        <InputNumber value={draft.culture} name='culture' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}