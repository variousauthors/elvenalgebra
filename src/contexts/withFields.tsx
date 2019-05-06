import { IState, IFields } from "../types/state";
import { connect } from "react-redux";
import { makeRenderPropsComponent } from "./renderProps";

interface IPropsFromParent {

}

interface IPropsFromState extends IFields {
  bob: string
}

const mapStateToProps = (state: IState): IPropsFromState => {
  return {
    ...state.fields,
    bob: 'Bob'
  }
}

export const WithFields = connect<IPropsFromState, null, IPropsFromParent, IState>(
  mapStateToProps,
  null
)(makeRenderPropsComponent<IPropsFromState>())