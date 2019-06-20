import { 
  updateTownFields, 
  updateCultureFields, 
  updateMainHallFields, 
  updateManaFields, 
  updatePlaystyleFields, 
  updateResidenceFields, 
  updateWorkshopFields,
} from './townReducers'

import {
  updateGoldenAbyssFields,
  updateEndlessExcavationFields,
  updateProsperityTowersFields,
} from './wonderReducers'

import {
  updateEventBuildingFilters,
  updateScoreFilter,
  updateEventBuilding, 
  addEventBuilding, 
  deleteEventBuilding,
} from './eventBuildingReducers'

import { 
  updateManufactory
} from './manufactoryReducers'

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
  updateEndlessExcavationFields,

  updateEventBuilding,
  addEventBuilding,
  deleteEventBuilding,

  updateEventBuildingFilters,
  updateScoreFilter,

  updateManufactory,
}

export { 
  townFields, 
  residenceFields, 
  cultureFields, 
  workshopFields, 
  manaFields, 
  playstyleFields, 
  mainHallFields,
} from './townReducers'

export { 
  goldenAbyssFields, 
  prosperityTowersFields, 
  endlessExcavationFields,
} from './wonderReducers'

export {
  eventBuildingsReducer as eventBuildings,
  eventBuildingFilters,
} from './eventBuildingReducers'

export { 
  manufactories
} from './manufactoryReducers'