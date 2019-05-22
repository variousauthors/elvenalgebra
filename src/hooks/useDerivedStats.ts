import { useSelect } from "@epeli/redux-hooks";
import { IState } from '../types';

export const useDerivedStats = () => {
  const { cultureFields, residenceFields, roadFields } = useSelect((state: IState) => {
    return ({
      cultureFields: state.cultureFields,
      residenceFields: state.residenceFields,
      roadFields: state.roadFields,
    })
  })

  const culturePerSquare = cultureFields.culture / (cultureFields.width * cultureFields.height)

  const roads = Math.min(residenceFields.width, residenceFields.height)
  const cultureCost = residenceFields.culture - (roads * roadFields.culture)
  const cultureSquares = cultureCost / culturePerSquare
  const residenceTotalArea = residenceFields.width * residenceFields.height + roads + cultureSquares
  const popPerSquare = residenceFields.population / residenceTotalArea

  return {
    culturePerSquare,
    popPerSquare,
  }
}
