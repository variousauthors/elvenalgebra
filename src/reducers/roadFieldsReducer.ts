import { IRoadFields } from "../types/state";

const initialState: IRoadFields = {
  culture: 0
}

enum RoadFieldsActions {
  UPDATE_FIELDS = 'UPDATE_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IRoadFieldsAction extends IAction<RoadFieldsActions, IRoadFields> {}

export const updateRoadFields = (data: IRoadFields): IRoadFieldsAction => {
  return {
    type: RoadFieldsActions.UPDATE_FIELDS,
    data
  }
}

export const roadFieldsReducer = (state: IRoadFields = initialState, action: IRoadFieldsAction): IRoadFields => {

  switch (action.type) {
    case RoadFieldsActions.UPDATE_FIELDS: {
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