import { IDerivedStats } from '../../../hooks/useDerivedStats'
import { IEventBuilding } from '../../../types'
import { calculateScore } from "./score";
import { Identity } from '../../../helpers';

export const calculateEventBuildingStats = (eventBuilding: IEventBuilding, derivedStats: IDerivedStats) => {
  const { culturePerSquare, popPerSquare, supplyPer24HrPerSquare, goodsPerSquare24Hr } = derivedStats

  const effectiveArea = Identity(0)
    .map(x => x + (eventBuilding.culture / culturePerSquare))
    .map(x => x + (eventBuilding.population / popPerSquare))
    .map(x => x + (eventBuilding.supply24Hr / supplyPer24HrPerSquare))
    .map(x => x + (eventBuilding.goods24Hr.tier1 / goodsPerSquare24Hr.tier1))
    .map(x => x + (eventBuilding.goods24Hr.tier2 / goodsPerSquare24Hr.tier2))
    .map(x => x + (eventBuilding.goods24Hr.tier3 / goodsPerSquare24Hr.tier3))
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
