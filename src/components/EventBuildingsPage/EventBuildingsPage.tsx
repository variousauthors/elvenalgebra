import React from 'react'
import { EventBuildingFields } from "../Fields";
import { useActionCreators, useSelect } from "@epeli/redux-hooks";
import { ActionCreators } from '../../reducers';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Fab } from '@material-ui/core';
import { useDerivedStats, useEventBuildingStats } from '../../hooks';
import { IEventBuilding, IState, IScoreFilter } from '../../types';
import { InputInteger } from '../Inputs';
import { toColor, calculateEventBuildingStats } from './helpers';
import { EventBuildingFilters } from './EventBuildingFilters'
import { selectAllEventBuildings } from '../../reducers/eventBuildingReducers';
import { contains, toLower } from 'ramda'
import { toInteger } from '../../helpers';

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

const EventBuilding = (props: IEventBuilding) => {
  const eventBuilding = props
  const actions = useActionCreators(ActionCreators)
  const classes = useStyles()

  const { effectiveArea, efficiency, score } = useEventBuildingStats(props)

  const displayScore = toInteger(score * 100)

  return (
    <Grid item md={6} xs={12} lg={4} key={eventBuilding.id}>
      <Paper className={classes.paper}>
        <div className={classes.badge}>
          <div style={{ backgroundColor: toColor(displayScore) }} className={classes.score}>{displayScore}</div>
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

const filterByName = (substring: string, name: string) => contains(toLower(substring), toLower(name))
const filterByScore = (scoreFilter: IScoreFilter, score: number) => {
  switch (scoreFilter.operator) {
    case 'gte': return score >= scoreFilter.value
    case 'lte': return score <= scoreFilter.value
    default: throw new Error(`scoreFilter.operator was ${scoreFilter.operator}`)
  }
}

interface IScoresById {
  [key: number]: number
}

const useEventBuildingScores = (eventBuildings: IEventBuilding[]) => {
  const derivedStats = useDerivedStats()

  return eventBuildings.reduce((scores, eventBuilding) => {
    const { score } = calculateEventBuildingStats(eventBuilding, derivedStats)

    scores[eventBuilding.id] = score

    return scores
  }, {} as IScoresById)
}

export const EventBuildingsPage = () => {
  const classes = useStyles()
  const eventBuildings = useSelect(selectAllEventBuildings)
  const scores = useEventBuildingScores(eventBuildings)

  const filters = useSelect((state: IState) => state.eventBuildingFilters)
  const actions = useActionCreators(ActionCreators)

  const buildings = eventBuildings
    .filter((eventBuilding) => filterByName(filters.name, eventBuilding.name))
    .filter((eventBuilding) => filterByScore(filters.score, scores[eventBuilding.id]))
    .map(eventBuilding => <EventBuilding key={eventBuilding.id} {...eventBuilding} />)

  return (
    <div className={classes.root}>
      <EventBuildingFilters />
      <Grid container spacing={3}>
        {buildings}
      </Grid>
      <Fab onClick={actions.addEventBuilding} className={classes.fab} color={'primary'}>
        <AddIcon />
      </Fab>
    </div>
  )
}