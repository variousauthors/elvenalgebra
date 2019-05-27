import { IPlaystyleFields } from "../types/state";
import { Action } from "redux";

const initialState: IPlaystyleFields = {
  daily3HrCollections: 0,
  daily9HrCollections: 0,
}

enum PlaystyleFieldsActions {
  UPDATE_PLAYSTYLE_FIELDS = 'UPDATE_PLAYSTYLE_FIELDS'
}

interface IAction<T, K> extends Action<T> {
  data: K
}

interface IPlaystyleFieldsAction extends IAction<PlaystyleFieldsActions, IPlaystyleFields> {}

export const updatePlaystyleFields = (data: IPlaystyleFields): IPlaystyleFieldsAction => {
  return {
    type: PlaystyleFieldsActions.UPDATE_PLAYSTYLE_FIELDS,
    data
  }
}

export const playstyleFields = (state: IPlaystyleFields = initialState, action: IPlaystyleFieldsAction): IPlaystyleFields => {

  switch (action.type) {
    case PlaystyleFieldsActions.UPDATE_PLAYSTYLE_FIELDS: {
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