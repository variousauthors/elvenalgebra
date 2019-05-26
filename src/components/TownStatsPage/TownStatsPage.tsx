import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CulturePanel, ResidencePanel, RoadPanel, TownPanel, WorkshopPanel } from './components'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export function TownStatsPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <TownPanel />
      <RoadPanel />
      <CulturePanel />
      <ResidencePanel />
      <WorkshopPanel />
    </div>
  );
}