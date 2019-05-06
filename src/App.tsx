import React from 'react';
import './App.css';
import { isNil } from 'ramda';

interface IInputTextProps {
  name: string
  label?: string

  onChange?: (changeEvent: { name: string, value: number }) => void
}

class InputText extends React.PureComponent<IInputTextProps> {

  constructor (props: IInputTextProps) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (isNil(this.props.onChange)) return

    this.props.onChange({
      name: this.props.name,
      value: parseInt(e.target.value)
    })
  }

  render () {
    const name = this.props.name

    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input name={name} type='number' onChange={this.onChange} />
      </div>
    )
  }
}

interface ITownData {
  population: number,
  workingPopulation: number,
  daily3HrCollections: number,
  daily9HrCollections: number,
}

interface ITownFieldsProps {
  onSave: (data: ITownData) => void
}

interface ITownFieldsState {
  [key: string]: number
}

class TownFields extends React.PureComponent<ITownFieldsProps, ITownFieldsState> {
  state = {
    population: 0,
    workingPopulation: 0,
    daily3HrCollections: 0,
    daily9HrCollections: 0,
  }

  constructor (props: any) {
    super(props)

    this.onTextChange = this.onTextChange.bind(this)
    this.onSaveClick = this.onSaveClick.bind(this)
  }

  onTextChange({ name, value }: { name: string, value: number }) {
    this.setState({
      [name]: value
    })
  }

  onSaveClick () {
    if (isNil(this.props.onSave)) return

    this.props.onSave(this.state)
  }

  render () {
    console.log(this.state)
    return (
      <div>
        <div>Town</div>

        <InputText name='population' onChange={this.onTextChange} />
        <InputText name='workingPopulation' onChange={this.onTextChange} />
        <InputText name='daily3HrCollections' onChange={this.onTextChange} />
        <InputText name='daily9HrCollections' onChange={this.onTextChange} />

        <button onClick={this.onSaveClick}>Save</button>
      </div>
    )
  }
}

const App: React.FC = () => {
  return (
    <div className="App">
      <TownFields onSave={console.log}/>
    </div>
  );
}

export default App;
