import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, ITownFields, GoodsType, TIER_1_GOODS, GoodsTypeNames, TIER_2_GOODS, TIER_3_GOODS } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft } from '../../../hooks';
import { InputInteger, InputSelect } from '../../Inputs';
import { Panel } from '../../../layouts'
import update from 'ramda/es/update';

interface IBoostedGoodsSelectProps {
  boostedT1: GoodsType
  boostedT2: GoodsType
  boostedT3: GoodsType

  update: (value: Partial<ITownFields>) => void
}

const BoostedGoodsSelect = (props: IBoostedGoodsSelectProps) => {
  const { boostedT1, boostedT2, boostedT3, update } = props

  const tier1 = TIER_1_GOODS.reduce((acc, goodsType) => {
    return acc.concat({
      value: String(goodsType),
      label: GoodsTypeNames[goodsType]
    })
  }, [{ value: String(GoodsType.NONE), label: 'None' }])

  const tier2 = TIER_2_GOODS.reduce((acc, goodsType) => {
    return acc.concat({
      value: String(goodsType),
      label: GoodsTypeNames[goodsType]
    })
  }, [{ value: String(GoodsType.NONE), label: 'None' }])

  const tier3 = TIER_3_GOODS.reduce((acc, goodsType) => {
    return acc.concat({
      value: String(goodsType),
      label: GoodsTypeNames[goodsType]
    })
  }, [{ value: String(GoodsType.NONE), label: 'None' }])

  return (
    <>
      <InputSelect label='Tier 1 Boost' value={String(boostedT1)} options={tier1} onChange={(value) => update({ boostedT1: parseInt(value) })} />
      <InputSelect label='Tier 2 Boost' value={String(boostedT2)} options={tier2} onChange={(value) => update({ boostedT2: parseInt(value) })} />
      <InputSelect label='Tier 3 Boost' value={String(boostedT3)} options={tier3} onChange={(value) => update({ boostedT3: parseInt(value) })} />
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