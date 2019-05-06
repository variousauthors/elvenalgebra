import React from 'react';
import './App.css';
import { TownFields } from './Fields/TownFields';

const App: React.FC = () => {
  return (
    <div className="App">
      <TownFields onSave={console.log}/>
    </div>
  );
}

export default App;