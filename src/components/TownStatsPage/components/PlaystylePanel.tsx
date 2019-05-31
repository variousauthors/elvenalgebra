import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, IPlaystyleFields } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputInteger, InputPercent } from '../../Inputs';
import { Panel } from '../../../layouts'

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
        <InputInteger value={draft.daily3HrCollections} name='daily3HrCollections' onChange={update} />
        <InputInteger value={draft.daily9HrCollections} name='daily9HrCollections' onChange={update} />
        <InputPercent value={draft.cultureBonus} label='Culture Bonus' onChange={(value) => update({ cultureBonus: value })} />
      </>
    </Panel>
  )
}