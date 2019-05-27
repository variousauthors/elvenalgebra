import { IGoldenAbyssFields } from '../types/state';
import { makeFieldsReducer } from './helpers';

const initialState: IGoldenAbyssFields = {
  level: 1,
  percent: 0,
  area: 9
}

const { update, reducer } = makeFieldsReducer(initialState, { update: 'GOLDEN_ABYSS' })

export const updateGoldenAbyssFields = update
export const goldenAbyssFields = reducer