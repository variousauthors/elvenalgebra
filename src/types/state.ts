import { Action } from "redux";
import { GoodsType } from "./goods";

export interface ITownFields {
  population: number
  workingPopulation: number
  roadsCulture: number
  boostedT1: GoodsType.MARBLE | GoodsType.STEEL | GoodsType.WOOD | GoodsType.NONE
  boostedT2: GoodsType.CRYSTAL | GoodsType.SCROLLS | GoodsType.SILK | GoodsType.NONE
  boostedT3: GoodsType.ELIXIR | GoodsType.DUST | GoodsType.SCROLLS | GoodsType.NONE
}

export interface IResidenceFields {
  count: number
  width: number
  height: number
  population: number
  culture: number
  level: number
}

export interface IWorkshopFields {
  count: number
  width: number
  height: number
  population: number
  culture: number
  supply3Hr: number
  supply9Hr: number
  level: number
}

export interface ICultureFields {
  name: string
  culture: number
  width: number
  height: number
}

export interface IManaFields {
  name: string
  mana1Hr: number
  width: number
  height: number
}

export interface IPlaystyleFields {
  daily3HrCollections: number,
  daily9HrCollections: number,
  cultureBonus: number,
}

export interface IMainHallFields {
  level: number
  width: number
  height: number
  population: number
  culture: number
  supplyCapacity: number
}

export interface IGoldenAbyssFields {
  level: number
  area: 9
  percent: number
}

export interface IProsperityTowersFields {
  level: number
  area: 20
  percent: number
}

export interface IEndlessExcavationFields {
  level: number
  area: 20
  percent: number
}

export interface IScoreFilter {
  operator: 'gte' | 'lte'
  value: number
}

export interface IEventBuildingFilters {
  name: string
  score: IScoreFilter
}

export interface IState {
  townFields: ITownFields
  residenceFields: IResidenceFields
  workshopFields: IWorkshopFields
  cultureFields: ICultureFields
  manaFields: IManaFields
  playstyleFields: IPlaystyleFields
  mainHallFields: IMainHallFields

  goldenAbyssFields: IGoldenAbyssFields
  prosperityTowersFields: IProsperityTowersFields
  endlessExcavationFields: IEndlessExcavationFields

  eventBuildings: IEventBuildings

  eventBuildingFilters: IEventBuildingFilters
}

export interface IManufactoryFields {
  width: number
  height: number
  name: number
  culture: number
  population: number
  level: number
  supply3Hr: number
  supply9Hr: number
  goods3Hr: number
  goods9Hr: number
  goodsType: GoodsType
}

export interface IEventBuildings {
  nextId: number
  [key: string]: IEventBuilding | number
}

export interface IEventBuildingAttributes {
  width: number
  height: number
  culture: number
  mana: number
  population: number
  supply24Hr: number
  name: string
}

export interface IEventBuilding extends IEventBuildingAttributes {
  id: number
}

export interface IAnyAction extends Action<any> {
  data: any
}