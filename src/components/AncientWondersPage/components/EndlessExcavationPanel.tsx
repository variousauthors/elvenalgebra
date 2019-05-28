import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputInteger, InputPercent } from '../../Inputs';
import { Panel } from '../../../layouts'

export const EndlessExcavationPanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.endlessExcavationFields)

  const { draft, update, publish } = useDraft({
    ...fields,
    onPublish: actions.updateEndlessExcavationFields
  })

  const { endlessExcavationEfficiency } = useDerivedStats()

  return (
    <Panel
      label={'Endless Excavation'}
      hint={`Level: ${draft.level}`}
      summary={`Efficiency: ${endlessExcavationEfficiency}`}
      onSaveClicked={publish}
    >
      <>
        <InputInteger value={draft.level} name='level' onChange={update} />
        <InputPercent value={draft.percent} label='Percent' step='.01' onChange={(value) => update({ percent: value })} />
      </>
    </Panel>
  )
}
