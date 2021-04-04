import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState } from '../../../core/AppState';
import { StartDispatchProps, StartProps } from './Start.props';
import {
  getItemsRequestAction,
  setQueryAction,
  StartViewActions,
} from '../actions/Start.actions';
import { Start } from './Start';

const mapStateToProps = (state: AppState, ownProps: StartProps): StartProps => {
  const searchResults = state.startState.items.filter((value) => {
    if (state.startState.query.length === 0) {
      return false;
    }
    return (
      value.name.toLowerCase().includes(state.startState.query.toLowerCase()) ||
      value.shortName
        .toLowerCase()
        .includes(state.startState.query.toLowerCase())
    );
  });

  return {
    ...ownProps,
    searchResults,
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
    getItems: (query: string) => dispatch(getItemsRequestAction(query)),
    setQuery: (query: string) => dispatch(setQueryAction(query)),
  };
};

// eslint-disable-next-line import/prefer-default-export
export const StartViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Start);
