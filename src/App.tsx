import React from 'react';
import './App.css';
import { TownStatsPanel, EventBuildingsPanel, BottomNavigation } from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Switch>
        <Route exact path="/" component={TownStatsPanel} />
        <Route path="/town" component={TownStatsPanel} />
        <Route path="/event-buildings" component={EventBuildingsPanel} />
      </Switch>
      <BottomNavigation />
    </BrowserRouter>
  )
}

export default App;