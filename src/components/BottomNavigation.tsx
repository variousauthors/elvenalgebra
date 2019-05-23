import React from 'react';
import { makeStyles } from '@material-ui/styles';
import MBottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { withRouter } from 'react-router-dom';
import { History } from 'history';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

interface ISimpleBottomNavigationProps {
  history: History
}

const NavigationAction = {
  toPath: (index: number) => {
    switch (index) {
      case 0: return '/town'
      case 1: return '/event-buildings'
      default: return '/'
    }
  }
}

const SimpleBottomNavigation = (props: ISimpleBottomNavigationProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <MBottomNavigation
      value={value}
      onChange={(event, newValue) => {
        props.history.push(NavigationAction.toPath(newValue))
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Town" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Event Buildings" icon={<FavoriteIcon />} />
    </MBottomNavigation>
  );
}

export const BottomNavigation = withRouter(SimpleBottomNavigation);