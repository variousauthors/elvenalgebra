import React from 'react';
import './App.css';
import { TownFields } from './components/Fields/TownFields';
import { IState, IFields } from './types/state';
import {useMapState, useActionCreators} from "@epeli/redux-hooks";

const ActionCreators = {
  updateFields(data: IFields) {
    return {
      type: 'UPDATE_FIELDS',
      data
    }
  }
}

const App = () => {
  const fields = useMapState((state: IState) => state.fields)
  const actions = useActionCreators(ActionCreators)

  return (
    <div className="App">
      <TownFields
        onSave={actions.updateFields}
        {...fields}
      />
      <div>population: {fields.population}</div>
    </div>
  )
}

export default App;