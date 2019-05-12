import { updateTownFields } from './townFieldsReducer'
import { updateRoadFields } from './roadFieldsReducer'
import { updateResidenceFields } from './residenceFieldsReducer'
import { updateCultureFields } from './cultureFieldsReducer'

export { townFields } from './townFieldsReducer'
export { roadFields } from './roadFieldsReducer'
export { residenceFields } from './residenceFieldsReducer'
export { cultureFields } from './cultureFieldsReducer'

export const ActionCreators = {
  updateCultureFields,
  updateResidenceFields,
  updateRoadFields,
  updateTownFields,
}