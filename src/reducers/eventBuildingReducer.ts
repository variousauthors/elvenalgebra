import { IEventBuilding, IEventBuildings, IEventBuildingAttributes, IState } from "../types";
import { isNumber } from "util";

const initialState: IEventBuildings = { 
  nextId: 1
}

const newEventBuilding: IEventBuildingAttributes = {
  culture: 0,
  width: 0,
  height: 0,
  population: 0
}

enum EventBuildingActions {
  UPDATE_EVENT_BUILDING = 'UPDATE_EVENT_BUILDING',
  ADD_EVENT_BUILDING = 'ADD_EVENT_BUILDING'
}

interface IAction<T, K> {
  type: T,
  data: K
}

type EventBuildingAction = IAddEventBuildingAction
  | IUpdateEventBuildingAction

interface IUpdateEventBuildingAction extends IAction<EventBuildingActions.UPDATE_EVENT_BUILDING, IEventBuilding> {}
interface IAddEventBuildingAction extends IAction<EventBuildingActions.ADD_EVENT_BUILDING, undefined> {}

export const selectAllEventBuildings = (state: IState): IEventBuilding[] => {
  return Object.values(state.eventBuildings).reduce((memo, eventBuilding) => {
    if (isNumber(eventBuilding)) return memo

    return memo.concat(eventBuilding)
  }, [] as IEventBuilding[])
}

export const updateEventBuilding = (data: IEventBuilding): IUpdateEventBuildingAction => {
  return {
    type: EventBuildingActions.UPDATE_EVENT_BUILDING,
    data
  }
}

export const addEventBuilding = (): IAddEventBuildingAction => {
  return {
    type: EventBuildingActions.ADD_EVENT_BUILDING,
    data: undefined
  }
}

const eventBuildingReducer = (state: IEventBuilding, action: EventBuildingAction): IEventBuilding => {
  switch (action.type) {
    case EventBuildingActions.UPDATE_EVENT_BUILDING: {
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

export const eventBuildingsReducer = (state: IEventBuildings = initialState, action: EventBuildingAction): IEventBuildings => {

  switch (action.type) {
    case EventBuildingActions.ADD_EVENT_BUILDING: {
      const nextId = state.nextId
      const eventBuilding = {
        id: nextId,
        ...newEventBuilding
      }

      return {
        ...state,
        nextId: nextId + 1,
        [nextId]: eventBuilding
      }
    }
    case EventBuildingActions.UPDATE_EVENT_BUILDING: {
      const id = action.data.id
      const eventBuilding = state[id]

      if (isNumber(eventBuilding)) {
        throw new Error('this should never happen')
      }

      return {
        ...state,
        [id]: eventBuildingReducer(eventBuilding, action)
      }
    }
    default: {
      return state
    }
  }
}