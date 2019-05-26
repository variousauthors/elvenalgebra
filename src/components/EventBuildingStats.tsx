import React from 'react'
import { IEventBuilding } from '../types';
import { InputNumber } from './Inputs/InputNumber';
import { useDerivedStats } from '../hooks';

interface IEventBuildingStatsProps extends IEventBuilding { }

const useEffectiveArea = (props: IEventBuildingStatsProps) => {
  const { popPerSquare, culturePerSquare, supplyPer24HrPerSquare } = useDerivedStats()

  return (props.culture / culturePerSquare) + (props.population / popPerSquare) + (props.supply / supplyPer24HrPerSquare)
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
