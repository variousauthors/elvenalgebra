import { Action } from "redux";

export interface ITownFields {
  population: number
  workingPopulation: number
  roadsCulture: number
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
  supply: number
  name: string
}

export interface IEventBuilding extends IEventBuildingAttributes {
  id: number
}

export interface IAnyAction extends Action<any> {
  data: any
}