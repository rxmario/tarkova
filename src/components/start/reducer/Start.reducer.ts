import update from 'immutability-helper';
import { combineReducers } from 'redux';
import {
  MarketItem,
  StartViewActions,
  StartViewActionTypes,
} from '../actions/Start.actions';
import { BaseState } from '../../../core/AppState';
import Status from '../../../core/Status';

export interface StartViewState extends BaseState {
  query: string;
  items: MarketItem[];
}

export const defaultStartViewState: StartViewState = {
  query: '',
  items: [],
  status: Status.READY,
  error: '',
};

const items = (
  state: StartViewState['items'] | undefined,
  action: StartViewActions
): StartViewState['items'] => {
  if (state === undefined) {
    return defaultStartViewState.items;
  }

  switch (action.type) {
    case StartViewActionTypes.GET_ITEMS: {
      return state;
    }
    case StartViewActionTypes.GET_ITEMS_SUCCESS: {
      return update(state, { $set: action.payload });
    }
    case StartViewActionTypes.GET_ITEMS_FAILURE: {
      return state;
    }
    default:
      return state;
  }
};

const status = (
  state: StartViewState['status'] | undefined,
  action: StartViewActions
): StartViewState['status'] => {
  if (state === undefined) {
    return defaultStartViewState.status;
  }

  switch (action.type) {
    case StartViewActionTypes.GET_ITEMS: {
      return update(state, { $set: Status.BUSY });
    }
    case StartViewActionTypes.GET_ITEMS_SUCCESS: {
      return update(state, { $set: Status.SUCCESS });
    }
    case StartViewActionTypes.GET_ITEMS_FAILURE: {
      return update(state, { $set: Status.ERROR });
    }
    default:
      return state;
  }
};

const error = (
  state: StartViewState['error'] | undefined,
  action: StartViewActions
): StartViewState['error'] => {
  if (state === undefined) {
    return defaultStartViewState.error;
  }

  switch (action.type) {
    case StartViewActionTypes.GET_ITEMS: {
      return update(state, { $set: '' });
    }
    case StartViewActionTypes.GET_ITEMS_SUCCESS: {
      return update(state, { $set: '' });
    }
    case StartViewActionTypes.GET_ITEMS_FAILURE: {
      return update(state, { $set: '' });
    }
    default:
      return state;
  }
};

const query = (
  state: StartViewState['query'] | undefined,
  action: StartViewActions
): StartViewState['query'] => {
  if (state === undefined) {
    return defaultStartViewState.query;
  }

  switch (action.type) {
    case StartViewActionTypes.SET_QUERY:
      return update(state, { $set: action.payload });
    default:
      return state;
  }
};

const startViewReducer = combineReducers<StartViewState>({
  query,
  items,
  status,
  error,
});

export default startViewReducer;
