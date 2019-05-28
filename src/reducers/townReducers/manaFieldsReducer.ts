import { IManaFields } from '../../types'

const initialState: IManaFields = {
  name: '',
  mana1Hr: 0,
  width: 0,
  height: 0,
}

enum ManaFieldsActions {
  UPDATE_MANA_FIELDS = 'UPDATE_MANA_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IManaFieldsAction extends IAction<ManaFieldsActions, IManaFields> {}

export const updateManaFields = (data: IManaFields): IManaFieldsAction => {
  return {
    type: ManaFieldsActions.UPDATE_MANA_FIELDS,
    data
  }
}

export const manaFields = (state: IManaFields = initialState, action: IManaFieldsAction): IManaFields => {

  switch (action.type) {
    case ManaFieldsActions.UPDATE_MANA_FIELDS: {
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