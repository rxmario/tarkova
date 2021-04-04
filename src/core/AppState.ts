// eslint-disable-next-line import/no-cycle
import {
  defaultStartViewState,
  StartViewState,
} from '../components/start/reducer/Start.reducer';
import Status from './Status';

export interface BaseState {
  status: Status;
  error: string;
}

export interface AppState {
  startState: StartViewState;
}

export const defaultAppState: AppState = {
  startState: defaultStartViewState,
};
