import { updateTownFields } from './townFieldsReducer'
import { updateResidenceFields } from './residenceFieldsReducer'
import { updateCultureFields } from './cultureFieldsReducer'
import { updateWorkshopFields } from './workshopFieldsReducer'
import { updateManaFields } from './manaFieldsReducer'
import { updatePlaystyleFields } from './playstyleFieldsReducer'
import { updateMainHallFields } from './mainHallFieldsReducer'

import { updateEventBuilding, addEventBuilding, deleteEventBuilding } from './eventBuildingReducer'

export { townFields } from './townFieldsReducer'
export { residenceFields } from './residenceFieldsReducer'
export { cultureFields } from './cultureFieldsReducer'
export { workshopFields } from './workshopFieldsReducer'
export { manaFields } from './manaFieldsReducer'
export { playstyleFields } from './playstyleFieldsReducer'
export { mainHallFields } from './mainHallFieldsReducer'

export { eventBuildingsReducer as eventBuildings } from './eventBuildingReducer'

export const ActionCreators = {
  updateCultureFields,
  updateResidenceFields,
  updateTownFields,
  updateEventBuilding,
  updateWorkshopFields,
  updateManaFields,
  updatePlaystyleFields,
  updateMainHallFields,
  addEventBuilding,
  deleteEventBuilding,
}