import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { persistedAppStore, store } from './core/AppStore';

render(
  <Provider store={store}>
    <PersistGate persistor={persistedAppStore}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
