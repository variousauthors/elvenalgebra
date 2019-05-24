import React from 'react';
import './App.css';
import { TownStatsPage, EventBuildingsPanel } from './components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useReactRouter from 'use-react-router';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: 20,
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
}));

const DrawerContents = () => {
  const classes = useStyles()
  const { history } = useReactRouter()

  return (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key={'Town'} onClick={() => history.push('town')}>
          <ListItemIcon><InboxIcon /></ListItemIcon>
          <ListItemText primary={'Town'} />
        </ListItem>
        <ListItem button key={'Event Buildings'} onClick={() => history.push('event-buildings')}>
          <ListItemIcon><MailIcon /></ListItemIcon>
          <ListItemText primary={'Event Buildings'} />
        </ListItem>
      </List>
    </div>
  )
}

const TitleTown = () => {
  return <>Configure Your Town</>
}

const TitleEventBuildings = () => {
  return <>Add Event Buildings</>
}

const App = () => {
  const classes = useStyles();
  const theme = useTheme<{ direction: any }>();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            <Switch>
              <Route exact path="/" component={TitleTown} />
              <Route path="/town" component={TitleTown} />
              <Route path="/event-buildings" component={TitleEventBuildings} />
            </Switch>
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerContents/>
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            <DrawerContents/>
          </Drawer>
        </Hidden>
      </nav>

      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          <Route exact path="/" component={TownStatsPage} />
          <Route path="/town" component={TownStatsPage} />
          <Route path="/event-buildings" component={EventBuildingsPanel} />
        </Switch>
      </main>
    </div>
  );
}

export default App