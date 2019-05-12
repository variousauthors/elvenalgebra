
export interface ITownFields {
  population: number,
  workingPopulation: number,
  daily3HrCollections: number,
  daily9HrCollections: number,
}

export interface IRoadFields {
  culture: number,
}

export interface IState {
  townFields: ITownFields
  roadFields: IRoadFields
}