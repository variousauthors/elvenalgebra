import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, ICultureFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from './Panel'

export const CulturePanel = () => {
  const actions = useActionCreators(ActionCreators)
  const cultureFields = useMapState((state: IState) => state.cultureFields)

  const { draft, update, publish } = useDraft<ICultureFields>({
    ...cultureFields,
    onPublish: actions.updateCultureFields
  })

  return (
    <Panel label={'Culture'} value={'Weeping Willows'} onSaveClicked={publish}>
      <>
        <InputNumber value={draft.culture} name='culture' onChange={update} />
        <InputNumber value={draft.width} name='width' onChange={update} />
        <InputNumber value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}