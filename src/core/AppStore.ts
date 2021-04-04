import { persistStore } from 'redux-persist';
import { createLogger } from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer } from './AppReducer';
import { defaultAppState } from './AppState';

const logger = createLogger({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  predicate: (_getState, _action) => process.env.NODE_ENV === 'development',
  diff: process.env.NODE_ENV === 'development',
});

export const store = createStore(
  reducer,
  defaultAppState,
  composeWithDevTools(applyMiddleware(logger))
);

export const persistedAppStore = persistStore(store);
