import React, { Fragment } from 'react'
import { EventBuildingFields } from "./Fields/EventBuildingFields";
import { useActionCreators, useSelect } from "@epeli/redux-hooks";
import { ActionCreators } from '../reducers';
import { selectAllEventBuildings } from "../reducers/eventBuildingReducer";
import { IEventBuilding, IState } from '../types';
import { InputNumber } from './Inputs/InputNumber';

interface IEventBuildingStatsProps extends IEventBuilding {
}

const EventBuildingStats = (props: IEventBuildingStatsProps) => {
  const cultureFields = useSelect((state: IState) => state.cultureFields)

  const area = props.width * props.height
  const culturePerSquare = cultureFields.culture / (cultureFields.width * cultureFields.height)
  const totalArea = props.culture / culturePerSquare
  const efficiency = totalArea / area

  return (
    <div>
      <InputNumber value={totalArea} name='totalArea' readOnly />
      <InputNumber value={efficiency} name='efficiency' readOnly />
    </div>
  )
}

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