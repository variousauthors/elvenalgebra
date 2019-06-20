import { ITownFields, IManufactory, IManufactories } from "../../types/state";
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
  UPDATE_TIER_1_MANUFACTORY = 'UPDATE_TIER_1_MANUFACTORY',
  UPDATE_TIER_2_MANUFACTORY = 'UPDATE_TIER_2_MANUFACTORY',
  UPDATE_TIER_3_MANUFACTORY = 'UPDATE_TIER_3_MANUFACTORY',
}

interface IAction<T, K> extends Action<T> {
  data: K
}

interface IManufactoriesAction extends IAction<ManufactoriesActions, IManufactory> {}

export const updateTier1Manufactory = (data: IManufactory): IManufactoriesAction => {
  return {
    type: ManufactoriesActions.UPDATE_TIER_1_MANUFACTORY,
    data
  }
}

export const updateTier2Manufactory = (data: IManufactory): IManufactoriesAction => {
  return {
    type: ManufactoriesActions.UPDATE_TIER_2_MANUFACTORY,
    data
  }
}

export const updateTier3Manufactory = (data: IManufactory): IManufactoriesAction => {
  return {
    type: ManufactoriesActions.UPDATE_TIER_3_MANUFACTORY,
    data
  }
}

export const manufactories = (state: IManufactories = initialState, action: IManufactoriesAction): IManufactories => {

  switch (action.type) {
    case ManufactoriesActions.UPDATE_TIER_1_MANUFACTORY: {
      return {
        ...state,
        tier1: {
          ...state.tier1,
          ...action.data,
        }
      }
    }
    case ManufactoriesActions.UPDATE_TIER_2_MANUFACTORY: {
      return {
        ...state,
        tier1: {
          ...state.tier2,
          ...action.data,
        }
      }
    }
    case ManufactoriesActions.UPDATE_TIER_3_MANUFACTORY: {
      return {
        ...state,
        tier1: {
          ...state.tier3,
          ...action.data,
        }
      }
    }
    default: {
      return state
    }
  }
}