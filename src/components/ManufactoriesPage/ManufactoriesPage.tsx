import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export function ManufactoriesPage() {
  const classes = useStyles({})

  return (
    <div className={classes.root}>
    </div>
  );
}