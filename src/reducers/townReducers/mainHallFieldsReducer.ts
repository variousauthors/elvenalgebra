import { IMainHallFields } from '../../types/state';
import { makeFieldsReducer } from '../helpers';

const initialState: IMainHallFields = {
  level: 0,
  culture: 0,
  population: 0,
  supplyCapacity: 0,
  width: 0,
  height: 0,
}

const { update, reducer } = makeFieldsReducer(initialState, {
  update: 'MAIN_HALL'
})

export const updateMainHallFields = update
export const mainHallFields = reducer