import React from 'react'
import { EventBuildingFields } from "./Fields/EventBuildingFields";
import {useMapState, useActionCreators} from "@epeli/redux-hooks";
import { ActionCreators } from '../reducers';
import { selectAllEventBuildings } from "../reducers/eventBuildingReducer";

export const EventBuildingsPanel = () => {
  const eventBuildings = useMapState(selectAllEventBuildings)
  const actions = useActionCreators(ActionCreators)

  const fields = eventBuildings.map(eventBuilding => {
    return (
      <EventBuildingFields
        onSave={actions.updateEventBuilding}
        onRemove={actions.deleteEventBuilding}
        {...eventBuilding}
      />
    )
  })

  return (
    <div>
      <div>Event Buildings</div>
      <button onClick={actions.addEventBuilding}>Add</button>
      {fields}
    </div>
  )
}