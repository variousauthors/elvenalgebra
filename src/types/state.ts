import { Action } from "redux";

export interface ITownFields {
  population: number,
  workingPopulation: number,
  daily3HrCollections: number,
  daily9HrCollections: number,
}

export interface IRoadsFields {
  culture: number,
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

export interface IState {
  townFields: ITownFields
  roadFields: IRoadsFields
  residenceFields: IResidenceFields
  workshopFields: IWorkshopFields
  cultureFields: ICultureFields
  manaFields: IManaFields

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