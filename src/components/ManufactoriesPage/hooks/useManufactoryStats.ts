import { useDerivedStats, IDerivedStats } from '../../../hooks/useDerivedStats';
import { IState, IManufactory, IPlaystyleFields } from '../../../types';
import { useMapState } from '@epeli/redux-hooks';
import { Identity } from '../../../helpers';

export const useManufactoryStats = (props: IManufactory) => {
  const playstyleFields = useMapState((state: IState) => state.playstyleFields)
  const derivedStats = useDerivedStats()

  return calculateManufactoryStats(props, derivedStats, playstyleFields)
}

export const calculateManufactoryStats = (manufactory: IManufactory, derivedStats: IDerivedStats, playstyleFields: IPlaystyleFields) => {
  const { culturePerSquare, popPerSquare, supplyPer24HrPerSquare } = derivedStats

  const manufactorySupply24Hr = (manufactory.supply3Hr * playstyleFields.daily3HrCollections) + (manufactory.supply9Hr * playstyleFields.daily9HrCollections)

  const effectiveArea = Identity(0)
    .map(x => x + (manufactory.culture / culturePerSquare))
    .map(x => x + (manufactory.population / popPerSquare))
    .map(x => x + (manufactorySupply24Hr / supplyPer24HrPerSquare))
    .reduce((_, x) => x, 0)

  const area = manufactory.width * manufactory.height

  return {
    effectiveArea,
    area,
  }
}
