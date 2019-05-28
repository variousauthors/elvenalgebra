import { IEndlessExcavationFields } from '../../types/state';
import { makeFieldsReducer } from '../helpers';

const initialState: IEndlessExcavationFields = {
  level: 0,
  percent: 0,
  area: 20
}

const { update, reducer } = makeFieldsReducer(initialState, { update: 'ENDLESS_EXCAVATION' })

export const updateEndlessExcavationFields = update
export const endlessExcavationFields = reducer
