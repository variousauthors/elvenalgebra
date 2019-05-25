import React from 'react'
import { IEventBuilding } from '../types';
import { InputNumber } from './Inputs/InputNumber';
import { useDerivedStats } from '../hooks';

interface IEventBuildingStatsProps extends IEventBuilding { }

export const EventBuildingStats = (props: IEventBuildingStatsProps) => {
  const { popPerSquare, culturePerSquare } = useDerivedStats()

  const area = props.width * props.height
  const totalArea = (props.culture / culturePerSquare) + (props.population / popPerSquare)
  const efficiency = (area > 0) ? totalArea / area : 0

  return (
    <div>
      <InputNumber value={totalArea} label='Effective Area' name='totalArea' readOnly />
      <InputNumber value={efficiency} label='Efficiency' name='efficiency' readOnly />
    </div>
  )
}
