
export interface IFields {
  population: number,
  workingPopulation: number,
  daily3HrCollections: number,
  daily9HrCollections: number,
}

export interface IState {
  fields: IFields
}