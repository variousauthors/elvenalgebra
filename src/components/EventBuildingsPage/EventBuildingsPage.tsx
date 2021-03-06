import React from 'react'
import { EventBuildingFields } from "../Fields";
import { useActionCreators, useSelect } from "@epeli/redux-hooks";
import { ActionCreators } from '../../reducers';
import { selectAllEventBuildings } from "../../reducers/eventBuildingReducer";
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Fab } from '@material-ui/core';
import { useDerivedStats } from '../../hooks';
import { IEventBuilding } from '../../types';
import { InputInteger } from '../Inputs';
import { calculateScore, toColor } from './helpers/score';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative'
  },
  score: {
    width: '2em',
    height: '2em',
    textAlign: 'center',
    lineHeight: '2em',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '22px',
  },
  badge: {
    position: 'absolute',
    right: '9px',
    top: '9px',
    color: theme.palette.common.white,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    position: 'relative',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function Identity<T>(x: T) {
  return {
    map: function <R>(f: (x: T) => R) {
      return Identity(f(x))
    },
    reduce: function <R>(f: (acc: R, x: T) => R, initial: R) {
      return [x].reduce(f, initial)
    }
  }
}

interface IEventBuildingStatsProps extends IEventBuilding { }

const useEffectiveArea = (props: IEventBuildingStatsProps) => {
  const { popPerSquare, culturePerSquare, supplyPer24HrPerSquare } = useDerivedStats()

  return Identity(0)
    .map(x => x + (props.culture / culturePerSquare))
    .map(x => x + (props.population / popPerSquare))
    .map(x => x + (props.supply / supplyPer24HrPerSquare))
    .reduce((_, x) => x, 0)
}

const EventBuilding = (props: IEventBuilding) => {
  const eventBuilding = props
  const actions = useActionCreators(ActionCreators)
  const classes = useStyles()
  const effectiveArea = useEffectiveArea(props)
  const area = props.width * props.height
  const efficiency = (area > 0) ? effectiveArea / area : 0
  const score = calculateScore(efficiency)

  return (
    <Grid item md={6} xs={12} lg={4} key={eventBuilding.id}>
      <Paper className={classes.paper}>
        <div className={classes.badge}>
          <div style={{ backgroundColor: toColor(score) }} className={classes.score}>{score}</div>
        </div>
        <EventBuildingFields
          onSave={actions.updateEventBuilding}
          onRemove={actions.deleteEventBuilding}
          {...eventBuilding}
        />
        <div>
          <InputInteger value={effectiveArea} label='Effective Area' name='totalArea' readOnly />
          <InputInteger value={efficiency} label='Efficiency' name='efficiency' readOnly />
          <InputInteger value={score} label='Score' name='score' readOnly />
        </div>
      </Paper>
    </Grid>
  )
}

export const EventBuildingsPage = () => {
  const classes = useStyles()
  const eventBuildings = useSelect(selectAllEventBuildings)
  const actions = useActionCreators(ActionCreators)

  const buildings = eventBuildings.map(eventBuilding => <EventBuilding {...eventBuilding} />)

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