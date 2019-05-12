import React, { Fragment } from 'react';
import { InputNumber } from '../Inputs/InputNumber'
import { ITownFields } from '../../types/state';
import { makeFields } from './Fields';

interface ITownFieldsProps {
  population: number
  workingPopulation: number
  daily3HrCollections: number
  daily9HrCollections: number

  onSave: (fields: ITownFields) => void
}

const Fields = makeFields<ITownFields>()

export const TownFields = (props: ITownFieldsProps) => {
  return (
    <div>
      <Fields
        label={'Town'}
        onSave={props.onSave}
        {...props}
      >
        {({ fields, setFields: onChange }) =>
          <Fragment>
            <InputNumber value={fields.population} name='population' onChange={onChange} />
            <InputNumber value={fields.workingPopulation} name='workingPopulation' onChange={onChange} />
            <InputNumber value={fields.daily3HrCollections} name='daily3HrCollections' onChange={onChange} />
            <InputNumber value={fields.daily9HrCollections} name='daily9HrCollections' onChange={onChange} />
          </Fragment>
        }
      </Fields>
    </div>
  )
}