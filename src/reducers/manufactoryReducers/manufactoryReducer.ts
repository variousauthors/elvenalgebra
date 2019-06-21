import { IManufactory, IManufactories } from "../../types/state";
import { Action } from "redux";
import { GoodsType } from "../../types";

const defaultManufactory: IManufactory = {
  width: 0,
  height: 0,
  culture: 0,
  supply3Hr: 0,
  supply9Hr: 0,
  goods3Hr: 0,
  goods9Hr: 0,
  level: 0,
  goodsType: GoodsType.NONE,
  population: 0,
}

const initialState: IManufactories = {
  tier1: defaultManufactory,
  tier2: defaultManufactory,
  tier3: defaultManufactory,
}

enum ManufactoriesActions {
  UPDATE_MANUFACTORY = 'UPDATE_MANUFACTORY',
}

interface IAction<T, K> extends Action<T> {
  data: K
}

interface IManufactoryByTier extends IManufactory {
  tier: Tier
}

interface IManufactoriesAction extends IAction<ManufactoriesActions, IManufactoryByTier> {}

export type Tier = 'tier1' | 'tier2' | 'tier3'

export const updateManufactory = (data: IManufactoryByTier): IManufactoriesAction => {
  return {
    type: ManufactoriesActions.UPDATE_MANUFACTORY,
    data
  }
}

export const manufactories = (state: IManufactories = initialState, action: IManufactoriesAction): IManufactories => {

  switch (action.type) {
    case ManufactoriesActions.UPDATE_MANUFACTORY: {
      const tier = action.data.tier

      return {
        ...state,
        [tier]: {
          ...state[tier],
          ...action.data,
        }
      }
    }
    default: {
      return state
    }
  }
}