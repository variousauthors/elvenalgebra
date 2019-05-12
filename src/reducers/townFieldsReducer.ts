import { ITownFields } from "../types/state";

const initialState: ITownFields = {
  population: 0,
  workingPopulation: 0,
  daily3HrCollections: 0,
  daily9HrCollections: 0,
}

enum TownFieldsActions {
  UPDATE_FIELDS = 'UPDATE_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface ITownFieldsAction extends IAction<TownFieldsActions, ITownFields> {}

export const updateTownFields = (data: ITownFields): ITownFieldsAction => {
  return {
    type: TownFieldsActions.UPDATE_FIELDS,
    data
  }
}

export const townFieldsReducer = (state: ITownFields = initialState, action: ITownFieldsAction): ITownFields => {

  switch (action.type) {
    case TownFieldsActions.UPDATE_FIELDS: {
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