
import express from 'express';
import compression from 'compression';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import RouterContext from 'react-router/lib/RouterContext';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import match from 'react-router/lib/match';
import ReduxRouterEngine from 'electrode-redux-router-engine';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import template from './template';
import routes from '../routes';
import combinedReducers from '../reducers';
import { fetchPosts } from '../actions';

let store;

function createReduxStore(req, match) {
  const initialState = {};
  store = createStore(combinedReducers, initialState);

  return Promise.all([
    fetchPosts(store.dispatch)
  ]).then(() => {
    return store;
  });
}

const clientAssets = require(KYT.ASSETS_MANIFEST); // eslint-disable-line import/no-dynamic-require
const app = express();

// Remove annoying Express header addition.
app.disable('x-powered-by');

// Compress (gzip) assets in production.
app.use(compression());

// Setup the public directory so that we can server static assets.
app.use(express.static(path.join(process.cwd(), KYT.PUBLIC_DIR)));

app.use((req, res) => {

  const engine = new ReduxRouterEngine({ routes, createReduxStore });

  engine.render(req)
    .then(result => {
      const html = result.html;
      res.status(200).send(template({
        root: html,
        initialStore: store.getState(),
        jsBundle: clientAssets.main.js,
        cssBundle: clientAssets.main.css,
        apiUrl: process.env.API_URL
      }));
    });

});

app.listen(parseInt(process.env.PORT || KYT.SERVER_PORT, 10));
