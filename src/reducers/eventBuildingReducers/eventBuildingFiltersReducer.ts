import { IEventBuildingFilters } from "../../types/state";

const initialState: IEventBuildingFilters = {
  name: '',
}

enum EventBuildingFiltersActions {
  UPDATE_EVENT_BUILDING_FILTERS = 'UPDATE_EVENT_BUILDING_FILTERS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IEventBuildingFiltersActions extends IAction<EventBuildingFiltersActions, IEventBuildingFilters> {}

export const updateEventBuildingFilters = (data: IEventBuildingFilters): IEventBuildingFiltersActions => {
  return {
    type: EventBuildingFiltersActions.UPDATE_EVENT_BUILDING_FILTERS,
    data
  }
}

export const eventBuildingFilters = (state: IEventBuildingFilters = initialState, action: IEventBuildingFiltersActions): IEventBuildingFilters => {

  switch (action.type) {
    case EventBuildingFiltersActions.UPDATE_EVENT_BUILDING_FILTERS: {
      return {
        ...state,
        ...action.data
      }
    }
    default: {
      return state
    }
  }
}