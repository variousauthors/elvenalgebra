import React from 'react';
import './App.css';
import { TownFields } from './components/Fields/TownFields';
import { WithFields } from './contexts/withFields';

const App: React.FC = () => {
  return (
    <div className="App">
      <TownFields onSave={console.log} />

      <WithFields>
        {(props) => {
          return (
            <div>population: { props.population }</div>
          )
        }}
      </WithFields>
    </div>
  );
}

export default App;