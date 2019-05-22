import React from 'react';
import styled from 'styled-components';

interface IFieldsetProps {
  name: string

  onSave?: () => void
  children?: JSX.Element
}

export const Fieldset = (props: IFieldsetProps) => {
  return (
    <div>
      <div>{props.name}</div>
      <div>
        {props.children}
      </div>
      <button onClick={props.onSave}>Save</button>
    </div>
  )
}
