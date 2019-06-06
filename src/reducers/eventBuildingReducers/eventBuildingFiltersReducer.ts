import { IEventBuildingFilters, IScoreFilter } from "../../types/state";

const initialState: IEventBuildingFilters = {
  name: '',
  score: {
    operator: 'gte',
    value: 0,
  }
}

enum EventBuildingFiltersActions {
  UPDATE_EVENT_BUILDING_FILTERS = 'UPDATE_EVENT_BUILDING_FILTERS',
  UPDATE_SCORE_FILTER = 'UPDATE_SCORE_FILTER'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IEventBuildingFiltersActions extends IAction<EventBuildingFiltersActions, Partial<IEventBuildingFilters>> {}

export const updateEventBuildingFilters = (data: Partial<IEventBuildingFilters>): IEventBuildingFiltersActions => {
  return {
    type: EventBuildingFiltersActions.UPDATE_EVENT_BUILDING_FILTERS,
    data
  }
}

export const updateScoreFilter = (data: IScoreFilter): IEventBuildingFiltersActions => {
  return {
    type: EventBuildingFiltersActions.UPDATE_EVENT_BUILDING_FILTERS,
    data: {
      score: data
    }
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
    case EventBuildingFiltersActions.UPDATE_SCORE_FILTER: {
      const score: IScoreFilter = {
        ...state.score,
        ...action.data.score
      }

      return {
        ...state,
        score
      }
    }
    default: {
      return state
    }
  }
}