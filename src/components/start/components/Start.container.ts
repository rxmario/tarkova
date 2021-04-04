import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../core/AppState';
import { StartDispatchProps, StartProps } from './Start.props';
import {
  getItemsRequestAction,
  StartViewActions,
} from '../actions/Start.actions';

const mapStateToProps = (state: AppState, ownProps: StartProps): StartProps => {
  return {
    ...ownProps,
    items: state.startState.items,
    status: state.startState.status,
    error: state.startState.error,
  };
};

const mapDispatchToProps = (
  dispatch: Dispatch<StartViewActions>,
  ownProps: StartProps
): StartDispatchProps => {
  return {
    ...ownProps,
    getItems: () => dispatch(getItemsRequestAction()),
  };
};

// eslint-disable-next-line import/prefer-default-export
export const StartViewContainer = connect(mapStateToProps, mapDispatchToProps);
