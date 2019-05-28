import { IProsperityTowersFields } from '../../types/state';
import { makeFieldsReducer } from '../helpers';

const initialState: IProsperityTowersFields = {
  level: 0,
  percent: 0,
  area: 20
}

const { update, reducer } = makeFieldsReducer(initialState, { update: 'PROSPERITY_TOWERS' })

export const updateProsperityTowersFields = update
export const prosperityTowersFields = reducer