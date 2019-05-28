import { updateTownFields } from './townReducers/townFieldsReducer'
import { updateResidenceFields } from './townReducers/residenceFieldsReducer'
import { updateCultureFields } from './townReducers/cultureFieldsReducer'
import { updateWorkshopFields } from './townReducers/workshopFieldsReducer'
import { updateManaFields } from './townReducers/manaFieldsReducer'
import { updatePlaystyleFields } from './townReducers/playstyleFieldsReducer'
import { updateMainHallFields } from './townReducers/mainHallFieldsReducer'

import { updateGoldenAbyssFields } from './wonderReducers/goldenAbyssFieldsReducer'
import { updateProsperityTowersFields } from './wonderReducers/prosperityTowersFieldsReducer'

import { updateEventBuilding, addEventBuilding, deleteEventBuilding } from './eventBuildingReducer'

export { townFields } from './townReducers/townFieldsReducer'
export { residenceFields } from './townReducers/residenceFieldsReducer'
export { cultureFields } from './townReducers/cultureFieldsReducer'
export { workshopFields } from './townReducers/workshopFieldsReducer'
export { manaFields } from './townReducers/manaFieldsReducer'
export { playstyleFields } from './townReducers/playstyleFieldsReducer'
export { mainHallFields } from './townReducers/mainHallFieldsReducer'

export { goldenAbyssFields } from './wonderReducers/goldenAbyssFieldsReducer'
export { prosperityTowersFields } from './wonderReducers/prosperityTowersFieldsReducer'

export { eventBuildingsReducer as eventBuildings } from './eventBuildingReducer'

export const ActionCreators = {
  updateCultureFields,
  updateResidenceFields,
  updateTownFields,
  updateWorkshopFields,
  updateManaFields,
  updatePlaystyleFields,
  updateMainHallFields,

  updateGoldenAbyssFields,
  updateProsperityTowersFields,

  updateEventBuilding,
  addEventBuilding,
  deleteEventBuilding,
}