import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import NotFoundPage from './components/static/NotFoundPage';
import Board from './components/board/board';

export default (
  <Route>
    <Route path="/" component={App}>
      <IndexRoute component={Board} />
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
