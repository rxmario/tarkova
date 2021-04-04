import { PersistConfig } from 'redux-persist/es/types';
import { AnyAction, combineReducers, Reducer } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { AppState, defaultAppState } from './AppState';
import startViewReducer from '../components/start/reducer/Start.reducer';

const appReducer = combineReducers<AppState>({
  startState: startViewReducer,
});

export const rootReducer: Reducer<AppState> = (
  state: AppState | undefined,
  action: AnyAction
): AppState => {
  if (state === undefined) {
    // eslint-disable-next-line no-param-reassign
    state = defaultAppState;
  }

  return appReducer(state, action);
};

const persistConfig: PersistConfig<any> = {
  key: 'Tarkova',
  storage,
  version: 1.1,
};

export const reducer = persistReducer(persistConfig, rootReducer);
