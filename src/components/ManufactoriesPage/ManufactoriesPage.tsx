import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { ManufactoryPanel } from './components';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export function ManufactoriesPage() {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
      <ManufactoryPanel tier='tier1'/>
    </div>
  );
}