import { IWorkshopFields } from "../types/state";

const initialState: IWorkshopFields = {
  level: 1,
  culture: 0,
  width: 0,
  height: 0,
  count: 0,
  population: 0,
  supply3Hr: 0,
  supply9Hr: 0,
}

enum WorkshopFieldsActions {
  UPDATE_WORKSHOP_FIELDS = 'UPDATE_WORKSHOP_FIELDS'
}

interface IAction<T, K> {
  type: T,
  data: K
}

interface IWorkshopFieldsAction extends IAction<WorkshopFieldsActions, IWorkshopFields> {}

export const updateWorkshopFields = (data: IWorkshopFields): IWorkshopFieldsAction => {
  return {
    type: WorkshopFieldsActions.UPDATE_WORKSHOP_FIELDS,
    data
  }
}

export const workshopFields = (state: IWorkshopFields = initialState, action: IWorkshopFieldsAction): IWorkshopFields => {

  switch (action.type) {
    case WorkshopFieldsActions.UPDATE_WORKSHOP_FIELDS: {
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