import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Panel } from './components'
import { useSelect, useActionCreators } from '@epeli/redux-hooks';
import { IState, IScoreFilter } from '../../types';
import { InputText, InputInteger } from '../Inputs';
import { ActionCreators } from '../../reducers';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
  score: {
    display: 'inline-block'
  }
}))

interface IEventBuildingFiltersProps {

}

const makeScoreFilter = (prev: IScoreFilter, next: Partial<IScoreFilter>): IScoreFilter => {
  return {
    ...prev,
    ...next
  }
}

export const EventBuildingFilters = (props: IEventBuildingFiltersProps) => {
  const classes = useStyles()
  const filters = useSelect((state: IState) => state.eventBuildingFilters)
  const actions = useActionCreators(ActionCreators)

  const updateOperator = (e: React.ChangeEvent<HTMLSelectElement>) => actions.updateScoreFilter(
    makeScoreFilter(filters.score, {
      operator: e.target.value as 'gte' | 'lte'
    })
  )

  const updateScore = ({ value }: { [key: string]: number }) => actions.updateScoreFilter(
    makeScoreFilter(filters.score, { value })
  )

  return (
    <div className={classes.root}>
      <Panel label={'Filters'}>
        <>
          <InputText label='Name' value={filters.name} onChange={(value) => actions.updateEventBuildingFilters({ name: value })} />
          <div>
            Score is 
            <select value={filters.score.operator} onChange={updateOperator}>
              <option value='gte'>greater than</option>
              <option value='lte'>less than</option>
            </select>
            <div className={classes.score}>
              <InputInteger value={filters.score.value} name='value' onChange={updateScore} />
            </div>
          </div>
        </>
      </Panel>
    </div>
  )
}