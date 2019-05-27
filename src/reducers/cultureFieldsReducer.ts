import { ICultureFields } from '../types/state';
import { makeFieldsReducer } from './helpers';

const initialState: ICultureFields = {
  name: '',
  culture: 0,
  width: 0,
  height: 0,
}

const { update, reducer } = makeFieldsReducer(initialState, { update: 'UPDATE_CULTURE_FIELDS' })

export const updateCultureFields = update
export const cultureFields = reducer