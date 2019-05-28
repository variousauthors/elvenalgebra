import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { InputInteger, InputPercent } from '../../Inputs';
import { Panel } from '../../../layouts'

export const GoldenAbyssPanel = () => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.goldenAbyssFields)

  const { draft, update, publish } = useDraft({
    ...fields,
    onPublish: actions.updateGoldenAbyssFields
  })

  const { goldenAbyssBonusPopulation } = useDerivedStats()

  return (
    <Panel
      label={'Golden Abyss'}
      hint={`Level: ${draft.level}`}
      summary={`Bonus Population: ${Math.round(goldenAbyssBonusPopulation)}`}
      onSaveClicked={publish}
    >
      <>
        <InputInteger value={draft.level} name='level' onChange={update} />
        <InputPercent value={draft.percent} label='Percent' step='.01' onChange={(value) => update({ percent: value })} />
      </>
    </Panel>
  )
}