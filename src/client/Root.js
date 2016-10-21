import React from 'react';
import Router from 'react-router/lib/Router';
import browserHistory from 'react-router/lib/browserHistory';
import routes from '../routes';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import combinedReducers from '../reducers';

import './base.scss';

// Import pre-setup state from server and create a store with it
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(combinedReducers, preloadedState);

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
    </Provider>
  );
}

export default Root;