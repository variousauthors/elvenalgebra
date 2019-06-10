import React from 'react'
import { IEventBuilding } from '../../types';
import { InputInteger } from '../Inputs';
import { useEventBuildingStats } from '../../hooks';

interface IEventBuildingStatsProps extends IEventBuilding { }

export const EventBuildingStats = (props: IEventBuildingStatsProps) => {
  const { effectiveArea, efficiency, score } = useEventBuildingStats(props)

  return (
    <div>
      <InputInteger value={effectiveArea} label='Effective Area' name='totalArea' readOnly />
      <InputInteger value={efficiency} label='Efficiency' name='efficiency' readOnly />
      <InputInteger value={score} label='Score' name='score' readOnly />
    </div>
  )
}
