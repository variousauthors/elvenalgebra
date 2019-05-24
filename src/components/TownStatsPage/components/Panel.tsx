import React from 'react';

import { usePanelStyles } from "../styles/PanelStyles";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

interface IPanelProps {
  onSaveClicked: () => void
  value: string
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
          <Typography className={classes.secondaryHeading}>{props.value}</Typography>
        </div>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails className={classes.details}>
        {props.children}
      </ExpansionPanelDetails>

      <Divider />

      <ExpansionPanelActions>
        <Button size="small">Cancel</Button>
        <Button size="small" color="primary" onClick={props.onSaveClicked}>Save</Button>
      </ExpansionPanelActions>
    </ExpansionPanel>
  )
}