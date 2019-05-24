import React, { Fragment } from 'react'
import { EventBuildingFields } from "./Fields";
import { useActionCreators, useSelect } from "@epeli/redux-hooks";
import { ActionCreators } from '../reducers';
import { selectAllEventBuildings } from "../reducers/eventBuildingReducer";
import { EventBuildingStats } from './EventBuildingStats'

export const EventBuildingsPanel = () => {
  const eventBuildings = useSelect(selectAllEventBuildings)
  const actions = useActionCreators(ActionCreators)

  const fields = eventBuildings.map(eventBuilding => {
    return (
      <Fragment key={eventBuilding.id}>
        <EventBuildingFields
          onSave={actions.updateEventBuilding}
          onRemove={actions.deleteEventBuilding}
          {...eventBuilding}
        />
        <EventBuildingStats {...eventBuilding} />
      </Fragment>
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