import React from 'react';

import { ActionCreators } from '../../../reducers';
import { IState, GoodsTypeNames, IManufactory } from '../../../types';
import { useMapState, useActionCreators } from "@epeli/redux-hooks";
import { useDraft, useDerivedStats } from '../../../hooks';
import { Panel } from '../../../layouts'
import { InputText, InputInteger } from '../../Inputs';

interface IManufactoryPanelProps {
  tier: 'tier1' | 'tier2' | 'tier3'
}

export const ManufactoryPanel = (props: IManufactoryPanelProps) => {
  const actions = useActionCreators(ActionCreators)
  const fields = useMapState((state: IState) => state.manufactories[props.tier])

  const { draft, update, publish } = useDraft({
    ...fields,
    onPublish: (data: IManufactory) => actions.updateManufactory({
      tier: props.tier,
      ...data
    })
  })

  const { goodsPerSquare24Hr } = useDerivedStats()

  return (
    <Panel label={'Bob'} hint={GoodsTypeNames[draft.goodsType]} summary={`Goods/Square: ${goodsPerSquare24Hr}`} onSaveClicked={publish}>
      <>
        <InputInteger value={draft.culture} name='culture' onChange={update} />
        <InputInteger value={draft.width} name='width' onChange={update} />
        <InputInteger value={draft.height} name='height' onChange={update} />
      </>
    </Panel>
  )
}