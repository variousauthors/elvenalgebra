import React from 'react'
import { IEventBuilding } from '../types';
import { InputInteger } from './Inputs';
import { useDerivedStats } from '../hooks';

interface IEventBuildingStatsProps extends IEventBuilding { }

function Identity <T>(x: T) {
  return {
    map: function <R>(f: (x: T) => R) {
      return Identity(f(x))
    },
    reduce: function <R>(f: (acc: R, x: T) => R, initial: R) {
      return [x].reduce(f, initial)
    }
  }
}

const useEffectiveArea = (props: IEventBuildingStatsProps) => {
  const { popPerSquare, culturePerSquare, supplyPer24HrPerSquare } = useDerivedStats()

  return Identity(0)
    .map(x => x + (props.culture / culturePerSquare))
    .map(x => x + (props.population / popPerSquare))
    .map(x => x + (props.supply / supplyPer24HrPerSquare))
    .reduce((_, x) => x, 0)
}

export const EventBuildingStats = (props: IEventBuildingStatsProps) => {
  const effectiveArea = useEffectiveArea(props)
  const area = props.width * props.height
  const efficiency = (area > 0) ? effectiveArea / area : 0

  return (
    <div>
      <InputInteger value={effectiveArea} label='Effective Area' name='totalArea' readOnly />
      <InputInteger value={efficiency} label='Efficiency' name='efficiency' readOnly />
    </div>
  )
}
