import { IRoadFields } from "../types/state";

const initialState: IRoadFields = {
  culture: 0
}

enum RoadFieldsActions {
  UPDATE_ROAD_FIELDS = 'UPDATE_ROAD_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IRoadFieldsAction extends IAction<RoadFieldsActions, IRoadFields> {}

export const updateRoadFields = (data: IRoadFields): IRoadFieldsAction => {
  return {
    type: RoadFieldsActions.UPDATE_ROAD_FIELDS,
    data
  }
}

export const roadFieldsReducer = (state: IRoadFields = initialState, action: IRoadFieldsAction): IRoadFields => {

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