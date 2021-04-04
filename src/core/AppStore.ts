import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import {AnyAction, applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './AppReducer';
import {AppState, defaultAppState} from './AppState';
import {createEpicMiddleware} from "redux-observable";
import { startEpic } from "../components/start/epics/Start.epics";

const logger = createLogger({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  predicate: (_getState, _action) => process.env.NODE_ENV === 'development',
  diff: process.env.NODE_ENV === 'development',
});

const epics = createEpicMiddleware<AnyAction, AnyAction, AppState>();

export const store = createStore(
  reducer,
  defaultAppState,
  composeWithDevTools(applyMiddleware(epics, logger)),
);

epics.run(startEpic);

export const persistedAppStore = persistStore(store);

