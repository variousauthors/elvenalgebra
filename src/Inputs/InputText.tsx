import React from 'react';
import { isNil } from "ramda";

interface IInputTextProps {
  name: string
  label?: string

  onChange?: (changeEvent: { name: string, value: number }) => void
}

export class InputText extends React.PureComponent<IInputTextProps> {

  constructor (props: IInputTextProps) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange (e: React.ChangeEvent<HTMLInputElement>) {
    if (isNil(this.props.onChange)) return

    this.props.onChange({
      name: this.props.name,
      value: parseInt(e.target.value)
    })
  }

  render () {
    const name = this.props.name

    return (
      <div>
        <label htmlFor={name}>{name}</label>
        <input name={name} type='number' onChange={this.onChange} />
      </div>
    )
  }
}
