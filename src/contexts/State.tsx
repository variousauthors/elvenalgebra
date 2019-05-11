import { connect } from "react-redux";
import * as React from 'react'

export interface IWithReduxProps<TPropsFromState, TState> {
  selector: (state: TState) => TPropsFromState
  children: (props: TPropsFromState) => JSX.Element
}

export class State<S, TState> extends React.PureComponent<IWithReduxProps<S, TState>> {
  private internal: React.ComponentClass;

  constructor(props: IWithReduxProps<S, TState>) {
    super(props);

    this.internal = connect<S & { children: (props: S) => JSX.Element; }, {}, {}, TState>(
      (state: TState) => {
        return {
          children: props.children,
          ...props.selector(state)
        };
      }
    )((props: S & { children: (props: S) => JSX.Element; }) => {
      return props.children(props);
    });
  }

  render() {
    return <this.internal />;
  }
}
