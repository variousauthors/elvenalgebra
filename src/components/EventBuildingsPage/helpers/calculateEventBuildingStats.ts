import { IDerivedStats } from '../../../hooks/useDerivedStats'
import { IEventBuilding } from '../../../types'
import { calculateScore } from "./score";

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

export const calculateEventBuildingStats = (eventBuilding: IEventBuilding, derivedStats: IDerivedStats) => {
  const { culturePerSquare, popPerSquare, supplyPer24HrPerSquare } = derivedStats

  const effectiveArea = Identity(0)
    .map(x => x + (eventBuilding.culture / culturePerSquare))
    .map(x => x + (eventBuilding.population / popPerSquare))
    .map(x => x + (eventBuilding.supply24Hr / supplyPer24HrPerSquare))
    .reduce((_, x) => x, 0)

  const area = eventBuilding.width * eventBuilding.height
  const efficiency = (area > 0) ? effectiveArea / area : 0

  return {
    effectiveArea,
    area,
    efficiency,
    score: calculateScore(efficiency),
  }
}
