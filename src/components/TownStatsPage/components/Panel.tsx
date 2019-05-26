import React from 'react';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { isNil } from 'ramda';
import { makeStyles } from '@material-ui/core/styles';

export const usePanelStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '20%',
  },
}));

interface IPanelProps {
  onSaveClicked: () => void
  hint?: string
  summary: string
  label: string
  defaultExpanded?: boolean
  children: JSX.Element
}

export const Panel = (props: IPanelProps) => {
  const classes = usePanelStyles()
  const defaultExpanded = Boolean(props.defaultExpanded)

  return (
    <ExpansionPanel defaultExpanded={defaultExpanded}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1c-content"
        id="panel1c-header"
      >
        <div className={classes.column}>
          <Typography className={classes.heading}>{props.label}</Typography>
        </div>
        <div className={classes.column}>
          {!isNil(props.hint) ? (
            <Typography className={classes.secondaryHeading}>{props.hint}</Typography>
          ) : null}
        </div>
        <div className={classes.column}>
          <Typography className={classes.secondaryHeading}>{props.summary}</Typography>
        </div>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails className={classes.details}>
        <div className={classes.root}>
          {props.children}
        </div>
      </ExpansionPanelDetails>

      <Divider />

      <ExpansionPanelActions>
        <Button size="small">Cancel</Button>
        <Button size="small" color="primary" onClick={props.onSaveClicked}>Save</Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}