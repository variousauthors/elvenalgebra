
interface IAction<T, K> {
  type: T,
  data: K
}

export const makeFieldsReducer = <T>(initialState: T, actionTypes: { update: string }) => {
  const UPDATE = `UPDATE_${actionTypes.update}_FIELDS`
  
  return {
    update: (data: T): IAction<any, T> => {
      return {
        type: UPDATE,
        data
      }
    },
    reducer: (state: T = initialState, action: IAction<any, T>): T => {
      switch (action.type) {
        case UPDATE: {
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
  }
}
