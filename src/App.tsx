import React from 'react';
import './App.css';
import { TownFields } from './components/Fields/TownFields';
import { RoadFields } from './components/Fields/RoadFields';
import { IState } from './types/state';
import {useMapState, useActionCreators} from "@epeli/redux-hooks";
import { updateTownFields, updateRoadFields } from './reducers';

const ActionCreators = {
  updateTownFields,
  updateRoadFields,
}

const App = () => {
  const townFields = useMapState((state: IState) => state.townFields)
  const roadFields = useMapState((state: IState) => state.roadFields)
  const actions = useActionCreators(ActionCreators)

  return (
    <div className="App">
      <TownFields
        onSave={actions.updateTownFields}
        {...townFields}
      />
      <RoadFields
        onSave={actions.updateRoadFields}
        {...roadFields}
      />
      <div>population: {townFields.population}</div>
    </div>
  )
}

export default App;