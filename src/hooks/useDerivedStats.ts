import { useSelect } from "@epeli/redux-hooks";
import { IState, IManufactory } from '../types';

const useCulturePerSquare = () => {
  const { cultureFields } = useSelect(selectFields)

  return cultureFields.culture / (cultureFields.width * cultureFields.height)
}

const useManaPerHrPerSquare = () => {
  const { manaFields } = useSelect(selectFields)

  return manaFields.mana1Hr / (manaFields.width * manaFields.height)
}

const usePopPerSquare = () => {
  const culturePerSquare = useCulturePerSquare()
  const { residenceFields, townFields } = useSelect(selectFields)

  const roadSquares = Math.min(residenceFields.width, residenceFields.height)
  const cultureCost = residenceFields.culture - (roadSquares * townFields.roadsCulture)
  const cultureSquares = cultureCost / culturePerSquare
  const area = residenceFields.width * residenceFields.height
  const effectiveArea = area + roadSquares + cultureSquares
  const popPerSquare = residenceFields.population / effectiveArea

  return popPerSquare
}

const useSuppliesPerSquare24Hr = () => {
  const culturePerSquare = useCulturePerSquare()
  const popPerSquare = usePopPerSquare()
  const { workshopFields, townFields, playstyleFields, goldenAbyssFields } = useSelect(selectFields)

  const workshopPopulation = workshopFields.population - (workshopFields.population * goldenAbyssFields.percent)

  const roadSquares = Math.min(workshopFields.width, workshopFields.height)
  const cultureCost = workshopFields.culture - (roadSquares * townFields.roadsCulture)
  const cultureSquares = cultureCost / culturePerSquare
  const residenceSquares = workshopPopulation / popPerSquare
  const area = workshopFields.width * workshopFields.height
  const effectiveArea = area + roadSquares + cultureSquares + residenceSquares

  const supplyPer24Hr = playstyleFields.daily3HrCollections * workshopFields.supply3Hr + playstyleFields.daily9HrCollections * workshopFields.supply9Hr
  const supplyPer24HrPerSquare = supplyPer24Hr / effectiveArea

  return supplyPer24HrPerSquare * playstyleFields.cultureBonus
}

const useGoodPerSquare24Hr = (manufactory: IManufactory) => {
  const culturePerSquare = useCulturePerSquare()
  const popPerSquare = usePopPerSquare()
  const supplyPer24HrPerSquare = useSuppliesPerSquare24Hr()

  const { townFields, playstyleFields, goldenAbyssFields } = useSelect(selectFields)

  const manuFactoryPopulation = manufactory.population - (manufactory.population * goldenAbyssFields.percent)

  const roadSquares = Math.min(manufactory.width, manufactory.height)
  const cultureCost = manufactory.culture - (roadSquares * townFields.roadsCulture)
  const cultureSquares = cultureCost / culturePerSquare
  const residenceSquares = manuFactoryPopulation / popPerSquare
  const suppliesCost = manufactory.supply3Hr * playstyleFields.daily3HrCollections + manufactory.supply9Hr * playstyleFields.daily9HrCollections
  const workshopSquares = suppliesCost / supplyPer24HrPerSquare

  const area = manufactory.width * manufactory.height
  const effectiveArea = area + roadSquares + cultureSquares + residenceSquares + workshopSquares

  const goodsPer24Hr = playstyleFields.daily3HrCollections * manufactory.goods3Hr + playstyleFields.daily9HrCollections * manufactory.goods9Hr
  const goodsPer24HrPerSquare = goodsPer24Hr / effectiveArea

  return goodsPer24HrPerSquare
}

const useGoodsPerSquare24Hr = () => {
  const { manufactories } = useSelect(selectFields)

  // TODO using 7 instead of the percent here
  return {
    tier1: 7 * useGoodPerSquare24Hr(manufactories.tier1),
    tier2: 7 * useGoodPerSquare24Hr(manufactories.tier2),
    tier3: 7 * useGoodPerSquare24Hr(manufactories.tier3),
  }
}

const useGoldenAbyssEfficiency = () => {
  const { townFields, goldenAbyssFields } = useSelect(selectFields)
  const popPerSquare = usePopPerSquare()

  const population = townFields.workingPopulation * goldenAbyssFields.percent
  const effectiveArea = population / popPerSquare
  const efficiency = effectiveArea / goldenAbyssFields.area

  return efficiency
}

const useProsperityTowersEfficiency = () => {
  const { playstyleFields, mainHallFields, prosperityTowersFields } = useSelect(selectFields)
  const supplyPer24HrPerSquare = useSuppliesPerSquare24Hr()

  const supply3Hr = mainHallFields.supplyCapacity * prosperityTowersFields.percent
  const supply24Hr = supply3Hr * (playstyleFields.daily3HrCollections + playstyleFields.daily9HrCollections)
  const effectiveArea = supply24Hr / supplyPer24HrPerSquare
  const efficiency = effectiveArea / prosperityTowersFields.area

  return efficiency
}

const useEndlessExcavationEfficiency = () => {
  const { mainHallFields, endlessExcavationFields } = useSelect(selectFields)
  const supplyPer24HrPerSquare = useSuppliesPerSquare24Hr()

  const supply24Hr = mainHallFields.supplyCapacity * endlessExcavationFields.percent
  const effectiveArea = supply24Hr / supplyPer24HrPerSquare
  const efficiency = effectiveArea / endlessExcavationFields.area

  return efficiency
}

const selectFields = (state: IState) => {
  return ({
    cultureFields: state.cultureFields,
    residenceFields: state.residenceFields,
    workshopFields: state.workshopFields,
    manufactories: state.manufactories,
    townFields: state.townFields,
    manaFields: state.manaFields,
    mainHallFields: state.mainHallFields,
    playstyleFields: state.playstyleFields,
    goldenAbyssFields: state.goldenAbyssFields,
    prosperityTowersFields: state.prosperityTowersFields,
    endlessExcavationFields: state.endlessExcavationFields,
  })
}

export interface IDerivedStats {
  culturePerSquare: number
  popPerSquare: number
  supplyPer24HrPerSquare: number
  goodsPerSquare24Hr: {
    tier1: number
    tier2: number
    tier3: number
  }
  manaPerHrPerSquare: number
  goldenAbyssEfficiency: number
  prosperityTowersEfficiency: number
  endlessExcavationEfficiency: number
}

export const useDerivedStats = (): IDerivedStats => {
  return {
    culturePerSquare: useCulturePerSquare(),
    goodsPerSquare24Hr: useGoodsPerSquare24Hr(),
    popPerSquare: usePopPerSquare(),
    supplyPer24HrPerSquare: useSuppliesPerSquare24Hr(),
    manaPerHrPerSquare: useManaPerHrPerSquare(),
    goldenAbyssEfficiency: useGoldenAbyssEfficiency(),
    prosperityTowersEfficiency: useProsperityTowersEfficiency(),
    endlessExcavationEfficiency: useEndlessExcavationEfficiency(),
  }
}
