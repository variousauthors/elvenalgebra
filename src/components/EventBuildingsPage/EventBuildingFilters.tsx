import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Panel } from './components'
import { useSelect, useActionCreators } from '@epeli/redux-hooks';
import { IState } from '../../types';
import { InputText } from '../Inputs';
import { ActionCreators } from '../../reducers';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}))

interface IEventBuildingFiltersProps {

}

export const EventBuildingFilters = (props: IEventBuildingFiltersProps) => {
  const classes = useStyles()
  const filters = useSelect((state: IState) => state.eventBuildingFilters)
  const actions = useActionCreators(ActionCreators)

  return (
    <div className={classes.root}>
      <Panel label={'Filters'}>
        <InputText label='Name' value={filters.name} onChange={(value) => actions.updateEventBuildingFilters({ name: value })}/>
      </Panel>
    </div>
  )
}