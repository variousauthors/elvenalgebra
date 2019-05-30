import React from 'react'
import { EventBuildingFields } from "./Fields";
import { useActionCreators, useSelect } from "@epeli/redux-hooks";
import { ActionCreators } from '../reducers';
import { selectAllEventBuildings } from "../reducers/eventBuildingReducer";
import { EventBuildingStats } from './EventBuildingStats'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Fab } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

export const EventBuildingsPanel = () => {
  const classes = useStyles()
  const eventBuildings = useSelect(selectAllEventBuildings)
  const actions = useActionCreators(ActionCreators)

  const buildings = eventBuildings.map(eventBuilding => {
    return (
      <Grid item md={6} xs={12} lg={4} key={eventBuilding.id}>
        <Paper className={classes.paper}>
          <EventBuildingFields
            onSave={actions.updateEventBuilding}
            onRemove={actions.deleteEventBuilding}
            {...eventBuilding}
          />
          <EventBuildingStats {...eventBuilding} />
        </Paper>
      </Grid>
    )
  })

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {buildings}
      </Grid>
      <Fab onClick={actions.addEventBuilding} className={classes.fab} color={'primary'}>
        <AddIcon />
      </Fab>
    </div>
  )
}