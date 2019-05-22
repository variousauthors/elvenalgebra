import React from 'react';

import { IState } from '../types/state';
import {useMapState, useActionCreators} from "@epeli/redux-hooks";
import { TownFields, RoadFields, ResidenceFields, CultureFields } from '../components/Fields';
import { ActionCreators } from '../reducers';

export const TownStatsPanel = () => {
  const townFields = useMapState((state: IState) => state.townFields)
  const roadFields = useMapState((state: IState) => state.roadFields)
  const residenceFields = useMapState((state: IState) => state.residenceFields)
  const cultureFields = useMapState((state: IState) => state.cultureFields)

  const actions = useActionCreators(ActionCreators)

  return (
    <div>
      <TownFields
        onSave={actions.updateTownFields}
        {...townFields}
      />
      <RoadFields
        onSave={actions.updateRoadFields}
        {...roadFields}
      />
      <ResidenceFields
        onSave={actions.updateResidenceFields}
        {...residenceFields}
      />
      <CultureFields
        onSave={actions.updateCultureFields}
        {...cultureFields}
      />
    </div>
  )
}