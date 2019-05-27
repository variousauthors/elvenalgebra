interface IAction<T, K> {
  type: T,
  data: K
}

export const makeFieldsReducer = <T>(initialState: T, actionTypes: { update: string }) => {
  
  return {
    update: (data: T): IAction<any, T> => {
      return {
        type: actionTypes.update,
        data
      }
    },
    reducer: (state: T = initialState, action: IAction<any, T>): T => {
      switch (action.type) {
        case actionTypes.update: {
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
