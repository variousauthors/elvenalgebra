import { IRoadsFields } from "../types/state";

const initialState: IRoadsFields = {
  culture: 0
}

enum RoadFieldsActions {
  UPDATE_ROAD_FIELDS = 'UPDATE_ROAD_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IRoadFieldsAction extends IAction<RoadFieldsActions, IRoadsFields> {}

export const updateRoadFields = (data: IRoadsFields): IRoadFieldsAction => {
  return {
    type: RoadFieldsActions.UPDATE_ROAD_FIELDS,
    data
  }
}

export const roadFields = (state: IRoadsFields = initialState, action: IRoadFieldsAction): IRoadsFields => {

  switch (action.type) {
    case RoadFieldsActions.UPDATE_ROAD_FIELDS: {
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