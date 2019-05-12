import React from 'react';
import { isNil } from 'ramda';
import { InputNumber } from '../Inputs/InputNumber'
import { IFields } from '../../types/state';

interface ITownFieldsProps {
  population: number
  workingPopulation: number
  daily3HrCollections: number
  daily9HrCollections: number

  onSave: (fields: IFields) => void
}

interface ITownFieldsState extends IFields {
  stale?: boolean
}

export interface ITownField {
  name: string
  value: number
}

const mapPropsToState = (props: ITownFieldsProps): ITownFieldsState => {
  return {
    population: props.population,
    workingPopulation: props.workingPopulation,
    daily3HrCollections: props.daily3HrCollections,
    daily9HrCollections: props.daily9HrCollections,
  }
}

export class TownFields extends React.PureComponent<ITownFieldsProps, ITownFieldsState> {

  constructor (props: ITownFieldsProps) {
    super(props)

    this.state = {
      stale: false,
      ...mapPropsToState(props)
    }

    this.onSaveClick = this.onSaveClick.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange (change: ITownField) {
    this.setState({
      [change.name]: change.value
    } as any)
  }

  onSaveClick () {
    if (isNil(this.props.onSave)) return

    this.setState({
      stale: true
    })

    this.props.onSave(this.state)
  }

  static getDerivedStateFromProps (nextProps: ITownFieldsProps, prevState: ITownFieldsState) {
    if (prevState.stale) {
      return {
        stale: false,
        ...mapPropsToState(nextProps)
      }
    }

    return null
  }

  render () {
    return (
      <div>
        <div>Town</div>

        <InputNumber value={this.state.population} name='population' onChange={this.onChange} />
        <InputNumber value={this.state.workingPopulation} name='workingPopulation' onChange={this.onChange} />
        <InputNumber value={this.state.daily3HrCollections} name='daily3HrCollections' onChange={this.onChange} />
        <InputNumber value={this.state.daily9HrCollections} name='daily9HrCollections' onChange={this.onChange} />

        <button onClick={this.onSaveClick}>Save</button>
      </div>
    )
  }
}
