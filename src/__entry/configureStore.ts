import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { devToolsEnhancer } from 'redux-devtools-extension';

import { IState, IAnyAction } from '../types/state';
import {
  townFields,
  cultureFields,
  residenceFields,
  eventBuildings,
  workshopFields,
  manaFields,
  playstyleFields,
} from '../reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers<IState, IAnyAction>({
  townFields,
  residenceFields,
  workshopFields,
  cultureFields,
  eventBuildings,
  manaFields,
  playstyleFields,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {
  let store = createStore(
    persistedReducer,
    devToolsEnhancer({
      name: 'Elvenar Helper'
    }),
  )
  let persistor = persistStore(store)
  return { store, persistor }
}