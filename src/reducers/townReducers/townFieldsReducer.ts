import { ITownFields } from "../../types/state";
import { Action } from "redux";

const initialState: ITownFields = {
  population: 0,
  workingPopulation: 0,
  roadsCulture: 0,
}

enum TownFieldsActions {
  UPDATE_TOWN_FIELDS = 'UPDATE_TOWN_FIELDS'
}

interface IAction<T, K> extends Action<T> {
  data: K
}

interface ITownFieldsAction extends IAction<TownFieldsActions, ITownFields> {}

export const updateTownFields = (data: ITownFields): ITownFieldsAction => {
  return {
    type: TownFieldsActions.UPDATE_TOWN_FIELDS,
    data
  }
}

export const townFields = (state: ITownFields = initialState, action: ITownFieldsAction): ITownFields => {

  switch (action.type) {
    case TownFieldsActions.UPDATE_TOWN_FIELDS: {
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