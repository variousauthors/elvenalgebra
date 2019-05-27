import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { CulturePanel, ResidencePanel, TownPanel, WorkshopPanel, PlaystylePanel, MainHallPanel } from './components'

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
      <PlaystylePanel />
      <CulturePanel />
      <MainHallPanel />
      <ResidencePanel />
      <WorkshopPanel />
    </div>
  );
}