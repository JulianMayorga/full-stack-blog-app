import React from 'react';
import { applyRouterMiddleware, browserHistory, Router } from 'react-router';
import { useScroll } from 'react-router-scroll';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import routes from '../routes';
import combinedReducers from '../reducers';

import './base.scss';

function scrollToTop() {
  return [0, 0];
}

// Import pre-setup state from server and create a store with it
const preloadedState = window.__PRELOADED_STATE__;
const store = createStore(combinedReducers, preloadedState);

// We need a Root component for React Hot Loading.
function Root() {
  return (
    <Provider store={store}>
      <Router history={browserHistory} routes={routes} render={applyRouterMiddleware(useScroll(scrollToTop))} />
    </Provider>
  );
}

export default Root;