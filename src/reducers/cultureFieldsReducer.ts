import { ICultureFields } from "../types/state";

const initialState: ICultureFields = {
  name: '',
  culture: 0,
  width: 0,
  height: 0,
}

enum CultureFieldsActions {
  UPDATE_CULTURE_FIELDS = 'UPDATE_CULTURE_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface ICultureFieldsAction extends IAction<CultureFieldsActions, ICultureFields> {}

export const updateCultureFields = (data: ICultureFields): ICultureFieldsAction => {
  return {
    type: CultureFieldsActions.UPDATE_CULTURE_FIELDS,
    data
  }
}

export const cultureFields = (state: ICultureFields = initialState, action: ICultureFieldsAction): ICultureFields => {

  switch (action.type) {
    case CultureFieldsActions.UPDATE_CULTURE_FIELDS: {
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