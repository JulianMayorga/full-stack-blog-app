
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from '../components/Layout';

// Webpack 2 supports ES2015 `System.import` by auto-
// chunking assets. Check out the following for more:
// https://gist.github.com/sokra/27b24881210b56bbaff7#code-splitting-with-es6

const importPostsPage = (nextState, cb) => {
  System.import('../components/PostsPage')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importNewPostPage = (nextState, cb) => {
  System.import('../components/NewPostPage')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

const importPostPage = (nextState, cb) => {
  System.import('../components/PostPage')
    .then(module => cb(null, module.default))
    .catch((e) => { throw e; });
};

// We use `getComponent` to dynamically load routes.
// https://github.com/reactjs/react-router/blob/master/docs/guides/DynamicRouting.md
const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute getComponent={importPostsPage} />
    <Route path="/new-post" getComponent={importNewPostPage} />
    <Route path="/posts/:postId" getComponent={importPostPage} />
  </Route>
);

// Unfortunately, HMR breaks when we dynamically resolve
// routes so we need to require them here as a workaround.
// https://github.com/gaearon/react-hot-loader/issues/288
if (module.hot) {
  require('../components/PostsPage');    // eslint-disable-line global-require
  require('../components/NewPostPage');   // eslint-disable-line global-require
  require('../components/PostPage');   // eslint-disable-line global-require
}

export default routes;

