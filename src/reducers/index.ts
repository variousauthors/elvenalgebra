import { updateTownFields } from './townFieldsReducer'
import { updateRoadFields } from './roadFieldsReducer'
import { updateResidenceFields } from './residenceFieldsReducer'
import { updateCultureFields } from './cultureFieldsReducer'
import { updateWorkshopFields } from './workshopFieldsReducer'

import { updateEventBuilding, addEventBuilding, deleteEventBuilding } from './eventBuildingReducer'

export { townFields } from './townFieldsReducer'
export { roadFields } from './roadFieldsReducer'
export { residenceFields } from './residenceFieldsReducer'
export { cultureFields } from './cultureFieldsReducer'
export { workshopFields } from './workshopFieldsReducer'

export { eventBuildingsReducer as eventBuildings } from './eventBuildingReducer'

export const ActionCreators = {
  updateCultureFields,
  updateResidenceFields,
  updateRoadFields,
  updateTownFields,
  updateEventBuilding,
  updateWorkshopFields,
  addEventBuilding,
  deleteEventBuilding
}