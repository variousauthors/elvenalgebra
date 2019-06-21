import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, ITownFields, GoodsType } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputInteger, InputSelect } from '../../Inputs';
import { Panel } from '../../../layouts'
import { GoodsSelectOptions } from '../../../helpers';

interface IBoostedGoodsSelectProps {
  tier1: GoodsType
  tier2: GoodsType
  tier3: GoodsType

  update: (value: Partial<ITownFields>) => void
}

const BoostedGoodsSelect = (props: IBoostedGoodsSelectProps) => {
  const { tier1, tier2, tier3, update } = props
  const options = GoodsSelectOptions

  return (
    <>
      <InputSelect label='Tier 1 Boost' value={String(tier1)} options={options.tier1} onChange={(value) => update({ tier1: parseInt(value) })} />
      <InputSelect label='Tier 2 Boost' value={String(tier2)} options={options.tier2} onChange={(value) => update({ tier2: parseInt(value) })} />
      <InputSelect label='Tier 3 Boost' value={String(tier3)} options={options.tier3} onChange={(value) => update({ tier3: parseInt(value) })} />
    </>
  )
}

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
        <BoostedGoodsSelect {...draft} update={update} />
      </>
    </Panel>
  )
}