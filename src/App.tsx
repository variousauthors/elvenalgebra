import React from 'react';
import './App.css';
import { EventBuildingsPanel } from './components/EventBuildingsPanel';
import { TownStatsPanel } from './components/TownStatsPanel';

const App = () => {
  return (
    <div className="App">
      <TownStatsPanel />
      <EventBuildingsPanel />
    </div>
  )
}

export default App;