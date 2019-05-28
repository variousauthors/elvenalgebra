import { useSelect } from "@epeli/redux-hooks";
import { IState } from '../types';

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

  return supplyPer24HrPerSquare
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
    townFields: state.townFields,
    manaFields: state.manaFields,
    mainHallFields: state.mainHallFields,
    playstyleFields: state.playstyleFields,
    goldenAbyssFields: state.goldenAbyssFields,
    prosperityTowersFields: state.prosperityTowersFields,
    endlessExcavationFields: state.endlessExcavationFields,
  })
}

export const useDerivedStats = () => {
  return {
    culturePerSquare: useCulturePerSquare(),
    popPerSquare: usePopPerSquare(),
    supplyPer24HrPerSquare: useSuppliesPerSquare24Hr(),
    manaPerHrPerSquare: useManaPerHrPerSquare(),
    goldenAbyssEfficiency: useGoldenAbyssEfficiency(),
    prosperityTowersEfficiency: useProsperityTowersEfficiency(),
    endlessExcavationEfficiency: useEndlessExcavationEfficiency(),
  }
}
