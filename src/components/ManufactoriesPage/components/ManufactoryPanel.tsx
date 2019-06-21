import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, GoodsTypeNames, IManufactory } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { Panel } from '../../../layouts'
import { InputInteger, InputSelect } from '../../Inputs';
import { GoodsSelectOptions } from '../../../helpers';
import { head, last, slice, toUpper } from 'ramda'

interface IManufactoryPanelProps {
  tier: 'tier1' | 'tier2' | 'tier3'
}

const formatTierString = (value: string) => {
  const middle = slice(1, value.length - 1)

  return `${toUpper(head(value))}${middle(value)} ${last(value)}`
}

export const ManufactoryPanel = (props: IManufactoryPanelProps) => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.manufactories[props.tier])
  const town = useMapState((state: IState) => state.townFields)
  const currentGoodsType = town[props.tier]

  const { draft, update, publish } = useDraft({
    ...fields,
    goodsType: currentGoodsType,
    onPublish: (data: IManufactory) => {
      actions.updateTownFields({ [props.tier]: draft.goodsType })

      return actions.updateManufactory({
        ...data,
        tier: props.tier,
      })
    } 
  })

  const { goodsPerSquare24Hr } = useDerivedStats()
  const options = GoodsSelectOptions[props.tier]

  return (
    <Panel
      label={`${formatTierString(props.tier)}: ${GoodsTypeNames[draft.goodsType]}`}
      hint={`Level ${draft.level}`}
      summary={`Daily Goods/Square: ${Math.round(goodsPerSquare24Hr[props.tier])}`}
      onSaveClicked={publish}
    >
      <>
        <InputSelect
          label='Type'
          value={String(draft.goodsType)}
          options={options}
          onChange={(value) => update({ goodsType: parseInt(value) })}
        />
        <InputInteger value={draft.level} label='Level' name='level' onChange={update} />
        <InputInteger value={draft.culture} label='Culture' name='culture' onChange={update} />
        <InputInteger value={draft.population} label='Population' name='population' onChange={update} />
        <InputInteger value={draft.width} label='Width' name='width' onChange={update} />
        <InputInteger value={draft.height} label='Height' name='height' onChange={update} />

        <h3>3 Hour Production</h3>
        <InputInteger value={draft.supply3Hr} label='Supplies Consumed' name='supply3Hr' onChange={update} />
        <InputInteger value={draft.goods3Hr} label='Goods Produced' name='goods3Hr' onChange={update} />

        <h3>9 Hour Production</h3>
        <InputInteger value={draft.supply9Hr} label='Supplies Consumed' name='supply9Hr' onChange={update} />
        <InputInteger value={draft.goods9Hr} label='Goods Produced' name='goods9Hr' onChange={update} />
      </>
    </Panel>
  )
}