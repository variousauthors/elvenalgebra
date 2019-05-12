import { updateTownFields } from './townFieldsReducer'
import { updateRoadFields } from './roadFieldsReducer'
import { updateResidenceFields } from './residenceFieldsReducer'
import { updateCultureFields } from './cultureFieldsReducer'

import { updateEventBuilding, addEventBuilding } from './eventBuildingReducer'

export { townFields } from './townFieldsReducer'
export { roadFields } from './roadFieldsReducer'
export { residenceFields } from './residenceFieldsReducer'
export { cultureFields } from './cultureFieldsReducer'

export { eventBuildingsReducer as eventBuildings } from './eventBuildingReducer'

export const ActionCreators = {
  updateCultureFields,
  updateResidenceFields,
  updateRoadFields,
  updateTownFields,
  updateEventBuilding,
  addEventBuilding
}