import React from 'react';
import './App.css';
import { TownFields } from './components/Fields/TownFields';
import { State } from "./contexts/State";
import { IState } from './types/state';

const selectPopulation = (state: IState) => ({ population: state.fields.population })

const App: React.FC = () => {
  return (
    <div className="App">
      <TownFields onSave={console.log} />

      <State selector={selectPopulation} >
        {(state) => {
          return (
            <div>population: { state.population }</div>
          )
        }}
      </State>
    </div>
  );
}

export default App;