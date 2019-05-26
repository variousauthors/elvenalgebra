import React from 'react'
import { IEventBuilding } from '../types';
import { InputNumber } from './Inputs/InputNumber';
import { useDerivedStats } from '../hooks';

interface IEventBuildingStatsProps extends IEventBuilding { }

const useEffectiveArea = (props: IEventBuildingStatsProps) => {
  const { popPerSquare, culturePerSquare, supplyPer24HrPerSquare, manaPerHrPerSquare } = useDerivedStats()

  return [0]
    .map(x => x + (props.culture / culturePerSquare))
    .map(x => x + (props.population / popPerSquare))
    .map(x => x + (props.supply / supplyPer24HrPerSquare))
    .map(x => x + (props.mana / manaPerHrPerSquare))
    .reduce((_, x) => x, 0)
}

export const EventBuildingStats = (props: IEventBuildingStatsProps) => {
  const effectiveArea = useEffectiveArea(props)
  const area = props.width * props.height
  const efficiency = (area > 0) ? effectiveArea / area : 0

  return (
    <div>
      <InputNumber value={effectiveArea} label='Effective Area' name='totalArea' readOnly />
      <InputNumber value={efficiency} label='Efficiency' name='efficiency' readOnly />
    </div>
  )
}
