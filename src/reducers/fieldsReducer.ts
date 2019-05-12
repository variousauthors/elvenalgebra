import { IFields } from "../types/state";

export const initialState: IFields = {
  population: 0,
  workingPopulation: 0,
  daily3HrCollections: 0,
  daily9HrCollections: 0,
}

enum FieldsActions {
  UPDATE_FIELDS = 'UPDATE_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IFieldsAction extends IAction<FieldsActions, IFields> {}

export const updateFields = (data: IFields): IFieldsAction => {
  return {
    type: FieldsActions.UPDATE_FIELDS,
    data
  }
}

export const fieldsReducer = (state: IFields = initialState, action: IFieldsAction): IFields => {

  switch (action.type) {
    case FieldsActions.UPDATE_FIELDS: {
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