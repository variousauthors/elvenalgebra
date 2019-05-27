import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IPlaystyleFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputNumber } from '../../Inputs/InputNumber';
import { Panel } from '../../../layouts/Panel'

export const PlaystylePanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.playstyleFields)

  const { draft, update, publish } = useDraft<IPlaystyleFields>({
    ...fields,
    onPublish: actions.updatePlaystyleFields
  })

  return (
    <Panel label={'Playstyle'} onSaveClicked={publish}>
      <>
        <InputNumber value={draft.daily3HrCollections} name='daily3HrCollections' onChange={update} />
        <InputNumber value={draft.daily9HrCollections} name='daily9HrCollections' onChange={update} />
      </>
    </Panel>
  )
}