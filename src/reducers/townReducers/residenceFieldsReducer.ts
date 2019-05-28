import { IResidenceFields } from "../../types/state";

const initialState: IResidenceFields = {
  level: 1,
  culture: 0,
  width: 0,
  height: 0,
  count: 0,
  population: 0
}

enum ResidenceFieldsActions {
  UPDATE_RESIDENCE_FIELDS = 'UPDATE_RESIDENCE_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IResidenceFieldsAction extends IAction<ResidenceFieldsActions, IResidenceFields> {}

export const updateResidenceFields = (data: IResidenceFields): IResidenceFieldsAction => {
  return {
    type: ResidenceFieldsActions.UPDATE_RESIDENCE_FIELDS,
    data
  }
}

export const residenceFields = (state: IResidenceFields = initialState, action: IResidenceFieldsAction): IResidenceFields => {

  switch (action.type) {
    case ResidenceFieldsActions.UPDATE_RESIDENCE_FIELDS: {
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