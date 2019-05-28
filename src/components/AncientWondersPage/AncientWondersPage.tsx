import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { GoldenAbyssPanel, ProsperityTowersPanel, EndlessExcavationPanel } from './components';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export function AncientWondersPage() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GoldenAbyssPanel/>
      <ProsperityTowersPanel/>
      <EndlessExcavationPanel/>
    </div>
  );
}