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
}

export interface ICultureFields {
  culture: number
  width: number
  height: number
}

export interface IState {
  townFields: ITownFields
  roadFields: IRoadsFields
  residenceFields: IResidenceFields
  cultureFields: ICultureFields
}

export interface IAnyAction extends Action<any> {
  data: any
}